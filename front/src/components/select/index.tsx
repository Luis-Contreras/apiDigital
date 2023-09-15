import React, { FC } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Select as SelectMui } from "@mui/material";
import { SelectInterface } from "./select.interface";

export const Select: FC<SelectInterface> = ({
  onChange,
  value,
  menuItems,
  title,
}) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{title}</InputLabel>
        <SelectMui
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Age"
          style={{ color: "white", margin: "20px 0 0 0" }}
          onChange={onChange}
        >
          {menuItems.map((item) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </SelectMui>
      </FormControl>
    </Box>
  );
};
