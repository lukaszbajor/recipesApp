import React, { FC } from "react";
interface Props {
  onClick: () => void;
  className?: string;
  children?: string;
}
const Button: FC<Props> = ({ onClick, className, children }) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
