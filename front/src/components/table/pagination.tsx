import React, { FC } from "react";
import TablePagination from "@mui/material/TablePagination";
import { PaginationInterface } from "./table.interface";
const Pagination: FC<PaginationInterface> = ({
  countRows,
  rowsPerPage,
  page,
  onPageChange,
  onRowsPerPageChange,
}) => {
  return (
    <TablePagination
      rowsPerPageOptions={[5, 10, 25]}
      component="div"
      style={{
        background: "#1c1c1c",
        color: "white",
      }}
      count={countRows}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={onPageChange}
      onRowsPerPageChange={onRowsPerPageChange}
    />
  );
};

export default Pagination;
