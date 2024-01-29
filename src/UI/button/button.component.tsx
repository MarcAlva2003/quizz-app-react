import './button.style.css'

import React, { forwardRef } from 'react';

interface IButton {
  text?: string;
  onClick: (ev: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  ref?: HTMLButtonElement;
}

export const Button = forwardRef<HTMLButtonElement, IButton>((props, ref) => {
  const {
    text, onClick, disabled,
  } = props;


  return (
    <button ref={ref} className='button-component' onClick={onClick} disabled={disabled}>
      <div className='button-text'>
        <p>{text}</p>
      </div>
    </button>
  )
})