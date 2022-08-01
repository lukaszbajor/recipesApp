import React, { FC } from "react";
interface Props {
  children: string;
  className?: string;
};
const Subtitle: FC<Props> = ({ children, className }) => {
  return <h2 className={className}>{children}</h2>;
};

export default Subtitle;
