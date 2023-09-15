import { TextField } from "@mui/material";
import React, { FC } from "react";
import { inputInterface } from "./input.interface";
import "./style.css"; // Importa el archivo de estilo

export const Input: FC<inputInterface> = ({
  title,
  onChange,
  disabled,
  placeholder,
  value,
}) => {
  return (
    <div>
      <h4 style={{ color: "white", margin: "20px 0 0 0" }}>{title}</h4>
      <div className="input-container">
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
