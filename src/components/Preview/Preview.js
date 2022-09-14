import React from 'react';

import './Preview.css';

export default function Preview({ title, subtitle, font, align, text }) {
  // implement a Preview screen here
  return (
    <div className={`Preview ${font}`} style={{ textAlign: align }}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{text}</p>
    </div>
  );
}