import React, { FC } from "react";
import { Button as ButtonMui } from "@mui/material";
import { ButtonInterface } from "./button.interface";

const Button: FC<ButtonInterface> = ({
  children,
  variant,
  color,
  disabled,
  onClick,
}) => {
  return (
    <ButtonMui
      variant={variant}
      disabled={disabled}
      style={{
        background: color === "primary" ? "#8b00cc" : "#7c003e",
        color: "white",
      }}
      onClick={onClick}
    >
      {children}
    </ButtonMui>
  );
};

export default Button;
