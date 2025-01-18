import React from 'react';
import '../../styles/input.css';

const Input = ({ label, type, name, value, onChange, error, onBlur}) => {
  return (
    <div className="input-form-container *:duration-300 max-w-96">
      <label htmlFor={name} className="label-form max-md:text-lg md:text-xl mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        className={`input-form w-96 max-w-full max-sm:w-64 py-3 px-4 rounded border-solid border-2 ${!error && 'border-gray-300'} ${error && 'border-red-400'}  hover:border-blue-600 focus:border-blue-600 `}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className="text-red-700 text-wrap mb-3">{error}</p>}
    </div>
  );
};

export default Input;
