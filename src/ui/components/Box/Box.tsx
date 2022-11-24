import React from "react";
import { Wrapper } from "./Box.styles";

interface BoxProps {
  children: React.ReactNode;
}
const Box = ({ children }: BoxProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Box;
