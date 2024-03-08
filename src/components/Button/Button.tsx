import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  type?: 'cancelButton' | 'deleteButton' | 'defaultButton';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled = false, type = 'defaultButton', children }) => {
  const buttonClass = styles[type];

  return (
    <button className={buttonClass} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
