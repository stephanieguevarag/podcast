import React from "react";
import { Wrapper } from "./Box.styles";

interface BoxProps {
  children: React.ReactNode;
  id?: string;
}
const Box = ({ children, id }: BoxProps) => {
  return <Wrapper data-testid={id}>{children}</Wrapper>;
};

export default Box;
