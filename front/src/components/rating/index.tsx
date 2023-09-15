import React, { FC } from "react";
import { Rating as RatingMui } from "@mui/material";
import { RatingInterface } from "./rating.interface";

export const Rating: FC<RatingInterface> = ({ value, setValue, title }) => {
  return (
    <>
      <h4 style={{ color: "white", margin: "20px 0 0 0" }}>{title}</h4>
      <RatingMui
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </>
  );
};
