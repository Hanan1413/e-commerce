import React from "react";

const FormInput = ({ label, name, type, defaultValue, placeholder }) => {
  return (
    <label className="form-control mb-3 ">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="input input-bordered w-full max-w-xs"
      />
    </label>
  );
};

export default FormInput;
