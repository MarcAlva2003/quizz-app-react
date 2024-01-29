import './button.style.css'

import React from 'react';

interface IButton {
  text?: string;
  onClick: (ev: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

export const Button = (props: IButton) => {
  const {
    text, onClick, disabled
  } = props;

  return (
    <button className='button-component' onClick={onClick} disabled={disabled}>
      <div className='button-text'>
        <p>{text}</p>
      </div>
    </button>
  )
}