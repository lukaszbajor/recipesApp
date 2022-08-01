import React, { FC } from "react";
interface Props {
  value?: string;
  type?: string;
  onChange?: (e: any) => void;
  placeholder?: string;
  ref?: string;
}
const Input: FC<Props> = ({ value, type, onChange, placeholder }) => {
  return (
    <input
      value={value}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      required
    />
  );
};

export default Input;
