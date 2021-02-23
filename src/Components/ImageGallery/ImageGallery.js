import fetchPictures from '../../Utils/Apis';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';
import LoadMoreButton from './LoadMoreButton/LoadMoreButton';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

import React, { useState, useEffect } from 'react';

const ImageGallery = ({
  query,
  pageNumber,
  ToggleLoader,
  ToggleGalleryState,
  ToggleFound,
  SetPageNumber,
  HandleLoadMoreButton,
  HandlePictureModal,
  ToggleModal,
}) => {
  const [pictures, SetPictures] = useState([]);
  const [totalPages, SetTotalPages] = useState(0);

  useEffect(() => {
    SetPictures([]);
    UpdatePictures();
  }, [query]);

  useEffect(() => {
    SetPictures([]);
    UpdatePictures();
  }, [pageNumber]);

  useEffect(() => {
    if (query === '') {
      SetPictures([]);
    }
    return () => {
      ToggleGalleryState(false);
    };
  });

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }, []);

  const test = data => {
    // this.setState({ pictures: [] });
    SetPictures([]);
    SetPageNumber(data.selected + 1);
  };

  const UpdatePictures = async () => {
    ToggleLoader();
    await fetchPictures({ query, pageNumber })
      .then(
        resp => (
          SetPictures([...pictures, ...resp.hits]),
          SetTotalPages(Math.round(resp.totalHits / 12))
        ),
      )
      .finally(() => ToggleLoader());

    if (pictures.length > 0) {
      ToggleGalleryState(true);
    }
    ToggleFound();
  };
  return (
    <>
      <ul className={styles.ImageGallery}>
        {pictures.map(item => {
          return (
            <ImageGalleryItem
              ToggleModal={ToggleModal}
              HandlePictureModal={HandlePictureModal}
              key={item.id}
              {...item}
            />
          );
        })}
      </ul>
      {pictures.length > 0 && (
        <LoadMoreButton HandleLoadMoreButton={HandleLoadMoreButton} />
      )}
      <div>
        <ReactPaginate
          pageCount={totalPages}
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={test}
          containerClassName={styles.pagination}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </div>
    </>
  );
};

ImageGallery.propTypes = {
  query: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  ToggleLoader: PropTypes.func.isRequired,
  ToggleGalleryState: PropTypes.func.isRequired,
  ToggleFound: PropTypes.func.isRequired,
};
export default ImageGallery;