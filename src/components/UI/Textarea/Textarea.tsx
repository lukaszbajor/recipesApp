import React, { FC } from "react";
interface Props {
  name?: string;
  id?: string;
  cols?: number;
  rows?: number;
  onChange?: (e: any) => void;
  placeholder?: string;
  className?: string;
  value?: string;
}
const Textarea: FC<Props> = ({
  name,
  id,
  cols,
  rows,
  onChange,
  placeholder,
  className,
  value,
}) => {
  return (
    <textarea
      name={name}
      id={id}
      cols={cols}
      rows={rows}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      value={value}
      required
    />
  );
};

export default Textarea;
