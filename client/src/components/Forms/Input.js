import React from 'react';

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <div className='input-form-container'>
      <label htmlFor={name} className='label-form'>
        {label}
      </label>
      <input
        id={name}
        name={name}
        className='imput-form'
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className="Erro">{error}</p>}
    </div>
  );
};

export default Input;
