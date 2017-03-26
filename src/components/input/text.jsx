import React from 'react';

const TextInput = ({ placeholder, error }) => (
  <div className="Input">
    <input required />
    <label>{ placeholder }</label>
    <span className="bar" />
    { error && <span className="error">{ error }</span> }
  </div>
);

export default TextInput;
