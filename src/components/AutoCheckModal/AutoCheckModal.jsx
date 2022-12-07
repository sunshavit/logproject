import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import { Button } from "../inputs/button.style";

const AutoCheckModal = ({ isOpen, handleClose }) => {
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle style={{ background: "#1F3242", color: "#EEEEEE" }}>
        Auto check Profile
      </DialogTitle>
      <DialogContent
        style={{
          background: "#142230",
          paddingBlockStart: "20px",
          width: "500px",
          height: "500px",
        }}
      ></DialogContent>
      <DialogActions style={{ background: "#1F3242" }}>
        <Button variant={"outline"} onClick={handleClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AutoCheckModal;
