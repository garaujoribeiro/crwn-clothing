import React from 'react';
import './button.styles.scss';
const BUTTON_TYPES = {
  google: 'google-sign-in',
  inverted: 'inverted',
};

function Button({ children, buttonType, ...otherProps }) {
  return (
    <button
      {...otherProps}
      className={`button-container ${BUTTON_TYPES[buttonType]}`}
    >
      {children}
    </button>
  );
}

export default Button;
