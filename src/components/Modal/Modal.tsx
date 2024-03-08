import React, { useEffect, useState } from 'react';
import styles from './Modal.module.css';
import alertIcon from '../../assets/alert.svg';
import Button from '../Button/Button.tsx';
import texts from '../../texts.ts';

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const [deleteButtonEnabled, setDeleteButtonEnabled] = useState(false);
  const { title, description, deleteButton, cancelButton } = texts;

  useEffect(() => {
    const timer = setTimeout(() => {
      setDeleteButtonEnabled(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modalBackDropImage} />
      <div className={styles.modal}>
        <header>
          <img src={alertIcon} alt="Alert" />
          <h2 className={styles.modalTitle}>{title}</h2>
        </header>
        <main>
          <p className={styles.modalDescription}>{description}</p>
        </main>
        <footer className={styles.modalFooter}>
          <Button type="cancelButton" onClick={onClose}>
            {cancelButton}
          </Button>
          <Button type="deleteButton" onClick={onClose} disabled={!deleteButtonEnabled}>
            {deleteButton}
          </Button>
        </footer>
      </div>
    </div>
  );
};
export default Modal;
