import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

const modal = document.querySelector('#modal');

const Modal = ({ ToggleModal, bigPicture }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      ToggleModal();
    }
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      ToggleModal();
    }
  };

  return createPortal(
    <div onClick={handleBackdropClick} className={styles.Overlay}>
      <div className={styles.Modal}>
        <img src={bigPicture} alt="" />
      </div>
    </div>,
    modal,
  );
};

Modal.propTypes = {
  ToggleModal: PropTypes.func.isRequired,
};

export default Modal;
// class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = event => {
//     if (event.code === 'Escape') {
//       this.props.ToggleModal();
//     }
//   };
//   handleBackdropClick = event => {
//     if (event.currentTarget === event.target) {
//       this.props.ToggleModal();
//     }
//   };
//   render() {
//     const { ToggleModal } = this.props;
//     return createPortal(
//       <div onClick={this.handleBackdropClick} className={styles.Overlay}>
//         <div className={styles.Modal}>
//           <img src={this.props.bigPicture} alt="" />
//         </div>
//       </div>,
//       modal,
//     );
//   }
// }
// Modal.propTypes = {
//   ToggleModal: PropTypes.func.isRequired,
// };
// export default Modal;
