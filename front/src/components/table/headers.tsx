import React, { FC } from "react";
import { HeaderInterface } from "./table.interface";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

export const Headers: FC<HeaderInterface> = ({ headers }) => {
  return (
    <TableHead>
      <TableRow>
        {headers.map((header) => (
          <TableCell style={{ color: "white" }}>{header}</TableCell>
        ))}
        <TableCell style={{ color: "white" }}>Editar</TableCell>
        <TableCell style={{ color: "white" }}>Eliminar</TableCell>
      </TableRow>
    </TableHead>
  );
};
