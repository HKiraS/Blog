import React from 'react';
import '../../styles/input.css'

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <div className='input-form-container mb-6 *:duration-300'>
      <label htmlFor={name} className='label-form max-md:text-lg md:text-xl'>
        {label}
      </label>
      <input
        id={name}
        name={name}
        className='input-form w-96 max-sm:w-64 py-3 px-4 rounded border-solid border-2'
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className="Erro text-red-700">{error}</p>}
    </div>
  );
};

export default Input;
