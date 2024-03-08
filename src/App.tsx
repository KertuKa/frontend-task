import { useState } from 'react';
import Modal from './components/Modal/Modal.tsx';
import styles from './App.module.css';
import Button from './components/Button/Button.tsx';
import texts from './texts.ts';

export function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const { buttonText } = texts;

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };
  return (
    <div>
      <div className={styles.mainPageContent}>
        <h1>Frontend Task</h1>
        <Button onClick={toggleModal} type="defaultButton">
          {buttonText}
        </Button>
        {isModalOpen && <Modal onClose={toggleModal} />}
      </div>
    </div>
  );
}
