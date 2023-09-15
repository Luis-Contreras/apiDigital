import React, { FC } from "react";
import { layoutInterface } from "./layout.interface";

export const Layout: FC<layoutInterface> = ({ children }) => {
  return <div style={{ padding: "25px" }}>{children}</div>;
};
