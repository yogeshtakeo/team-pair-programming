import React from "react";
interface IProps {
  label: string;
  placeholder: string;
  type: string;
}
function Input({ label, placeholder, type }: IProps) {
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <input type={type} placeholder={placeholder}></input>
    </div>
  );
}

export default Input;
