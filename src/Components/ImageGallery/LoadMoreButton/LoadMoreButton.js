import React from 'react';
import PropTypes from 'prop-types';
import styles from './LoadMorebutton.module.css';

const LoadMoreButton = ({ HandleLoadMoreButton }) => {
  return (
    <>
      <button
        className={styles.Button}
        onClick={() => HandleLoadMoreButton()}
        type="button"
      >
        Load more
      </button>
    </>
  );
};
LoadMoreButton.propTypes = {
  HandleLoadMoreButton: PropTypes.func.isRequired,
};
export default LoadMoreButton;
