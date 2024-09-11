// src/components/FormInput.jsx
import React from 'react';

const FormInput = ({ type, name, placeholder, value, onChange }) => {
  return (
    <div className="mb-4">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full p-3 border border-gray-300 rounded-lg"
      />
    </div>
  );
};

export default FormInput;
