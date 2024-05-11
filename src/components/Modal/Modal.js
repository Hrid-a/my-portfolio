import React from "react";
import { X as Close } from 'react-feather';
import { Dialog } from '@headlessui/react';

import VisuallyHidden from "../VisuallyHidden";
import styles from './Modal.module.css';

function Modal({ isOpen, handleDismiss, description, children }) {




  return (
    <Dialog
      className={styles.wrapper}
      open={isOpen}
      onClose={handleDismiss}
    >
      <div
        className={styles.backdrop}
        onClick={handleDismiss}
      />
      <div className={styles.content}>
        <Dialog.Panel className={styles.dialog}>
          <button
            className={styles.closeBtn}
            onClick={handleDismiss}
          >
            <Close />
            <VisuallyHidden>Dismiss modal</VisuallyHidden>
          </button>

          {description && (
            <Dialog.Description>
              {description}
            </Dialog.Description>
          )}
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  );


}

export default Modal;