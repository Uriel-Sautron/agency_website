import React from 'react';

const Button = ({ content, className, onClick }) => (
  <button type="button" className={className} onClick={onClick}>
    {content}
  </button>
);

export default Button;
