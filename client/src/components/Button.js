import React from 'react';
import '../styles/buttons.css';

export const Button = ({
  text,
  type,
  size,
  classes,
  href = '',
  onClick =  () => (window.location.href = href)
}) => {
  const classesButton = `btn-${type}-${size} ${classes}`;

  return (
    <button className={classesButton} onClick={onClick}>
      {text}
    </button>
  );
};
