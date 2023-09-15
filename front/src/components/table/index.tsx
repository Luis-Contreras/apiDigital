import React, { FC } from "react";
import { Table as TableMui } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "./pagination";
import { SurveyInterface } from "../../types/survey.interface";
import { TableInterface } from "./table.interface";
import { Headers } from "./headers";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";

const Table: FC<TableInterface> = ({
  rows,
  headers,
  total,
  rowsPerPage,
  page,
  onPageChange,
  onRowsPerPageChange,
  onEdit,
  onDelete,
}) => {
  return (
    <Paper>
      <TableContainer style={{ background: "#1c1c1c" }} component={Paper}>
        <TableMui sx={{ minWidth: 650 }} aria-label="simple table">
          <Headers headers={headers} />
          <TableBody>
            {rows.map((row: SurveyInterface) => (
              <TableRow
                key={row.identity_client}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell style={{ color: "white" }} component="th">
                  {row.identity_client}
                </TableCell>
                <TableCell style={{ color: "white" }} component="th">
                  {row.model_car}
                </TableCell>
                <TableCell style={{ color: "white" }}>
                  {row.factors_purchasing}
                </TableCell>
                <TableCell style={{ color: "white" }}>
                  {row.drive_rating}
                </TableCell>
                <TableCell style={{ color: "white" }}>
                  {row.satisfaction_rating}
                </TableCell>
                <TableCell
                  style={{ color: "white", cursor: "pointer" }}
                  onClick={() => onEdit(row)}
                >
                  <CreateIcon />
                </TableCell>
                <TableCell
                  style={{ color: "red", cursor: "pointer" }}
                  onClick={() => onDelete(row?.id)}
                >
                  <DeleteIcon />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableMui>
      </TableContainer>
      <Pagination
        countRows={total}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
      />
    </Paper>
  );
};

export default Table;
