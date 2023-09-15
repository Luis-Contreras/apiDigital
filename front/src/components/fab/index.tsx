import React, { FC } from "react";
import { Fab as FabMui } from "@mui/material";
import { FabInterface } from "./fab.interface";

export const Fab: FC<FabInterface> = ({ children, disabled, onClick }) => {
  return (
    <FabMui
      style={{ background: "#8b00cc", color: "white" }}
      disabled={disabled}
      onClick={onClick}
      aria-label="add"
    >
      {children}
    </FabMui>
  );
};
