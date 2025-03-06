import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Button.css';

function Button({ text, onClick, to, styleClass }) {
  return to ? (
    <Link to={to}>
      <button className={styleClass}>{text}</button>
    </Link>
  ) : (
    <button className={styleClass} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
