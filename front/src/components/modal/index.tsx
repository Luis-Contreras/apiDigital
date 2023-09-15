import React, { FC } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "../button";
import { ModalInterface } from "./modal.interface";

export const Modal: FC<ModalInterface> = ({
  open,
  setOpen,
  title,
  content,
  action,
  setFormData,
}) => {
  const handleClose = () => {
    setOpen(false);
    setFormData();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle
        style={{ background: "#1c1c1c", color: "white" }}
        id="alert-dialog-title"
      >
        {title}
      </DialogTitle>
      <DialogContent style={{ background: "#1c1c1c", color: "white" }}>
        <DialogContentText id="alert-dialog-description">
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions style={{ background: "#1c1c1c", color: "white" }}>
        <Button onClick={handleClose} color="secondary">
          Cerrar
        </Button>
        <Button onClick={action} color="primary">
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
