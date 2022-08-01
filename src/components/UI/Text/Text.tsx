import React, { FC } from "react";
interface Props {
  children?: string;
  className?: string;
}
const Text: FC<Props> = ({ children, className }) => {
  return <p className={className}>{children}</p>;
};

export default Text;
