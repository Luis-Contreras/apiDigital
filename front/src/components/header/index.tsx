import React, { FC } from "react";
import { HeaderInterface } from "./header.interface";

const Header: FC<HeaderInterface> = ({ title }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "60px",
        background: "#8b00cc",
      }}
    >
      <h1
        style={{
          margin: "0",
          padding: "7px 30px",
          fontFamily: "cursive",
          color: "white",
        }}
      >
        {title}
      </h1>
    </div>
  );
};

export default Header;
