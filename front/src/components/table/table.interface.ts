import { SurveyInterface } from "../../types/survey.interface";

export interface TableInterface {
  rows: SurveyInterface[];
  headers: string[];
  total: number;
  rowsPerPage: number;
  page: number;
  onPageChange: (e?: any, f?: any) => void;
  onRowsPerPageChange: (e?: any) => void;
  onEdit: (e?: any) => void;
  onDelete: (e?: any) => void;
}

export interface HeaderInterface {
  headers: string[];
}

export interface PaginationInterface {
  countRows: number;
  rowsPerPage: number;
  page: number;
  onPageChange: () => void;
  onRowsPerPageChange: () => void;
}
