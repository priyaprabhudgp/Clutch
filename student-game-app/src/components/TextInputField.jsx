import React from "react";
import "./TextInputField.css";

const TextInputField = ({ type = "text", value, onChange, placeholder, required, name }) => (
  <div className="txt-Root">
    <input
      className="txt-Input"
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      name={name}
    />
  </div>
);

export default TextInputField;
