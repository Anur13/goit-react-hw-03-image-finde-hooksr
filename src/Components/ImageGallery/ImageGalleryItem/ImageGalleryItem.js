import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({
  previewURL,
  tags,
  HandlePictureModal,
  largeImageURL,
  ToggleModal,
}) => {
  const openBigPicture = event => {
    HandlePictureModal(largeImageURL);
    ToggleModal();
  };

  return (
    <li className={styles.ImageGalleryItem}>
      <img
        onClick={openBigPicture}
        src={previewURL}
        alt={tags}
        className={styles.ImageGalleryItemImage}
      />
    </li>
  );
};
ImageGalleryItem.propTypes = {
  previewURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  HandlePictureModal: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  ToggleModal: PropTypes.func.isRequired,
};
export default ImageGalleryItem;
