import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Button.css';

function Button({ texto, onClick, to, claseEstilo }) {
  return to ? (
    <Link to={to}>
      <button className={claseEstilo}>{texto}</button>
    </Link>
  ) : (
    <button className={claseEstilo} onClick={onClick}>
      {texto}
    </button>
  );
}

export default Button;
