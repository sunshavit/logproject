import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "../inputs/button.style";
import { IndexGridWrap } from "./IndexModal.style";

const columns = [
  {
    field: "logName",
    headerName: "Log Name",
    width: 500,
    sortable: false,
  },
  {
    field: "docNum",
    headerName: "Number Of Docs",
    width: 150,
    sortable: false,
  },

  {
    field: "deleted",
    headerName: "Deleted Docs",
    width: 150,
    align: "left",
  },
  {
    field: "size",
    headerName: "Size",
    sortable: false,
    width: 150,
  },
];

const rows = [
  {
    id: 1,
    logName: "dp-attack-row-ty-dp-ts-attack-row-sl-19279",
    docNum: 30726,
    deleted: 1,
    size: "6.3 mb",
    valid: true,
  },
  {
    id: 2,
    logName: "dp-attack-row-ty-dp-ts-attack-row-sl-19279",
    docNum: 1526,
    deleted: 1,
    size: "2 mb",
    valid: false,
  },
  {
    id: 3,
    logName: "dp-attack-row-ty-dp-ts-attack-row-sl-19279",
    docNum: 25648,
    deleted: 1,
    size: "5.4 mb",
    valid: true,
  },
  {
    id: 4,
    logName: "dp-attack-row-ty-dp-ts-attack-row-sl-19279",
    docNum: 4582,
    deleted: 20,
    size: "8.7 mb",
    valid: false,
  },
  {
    id: 5,
    logName: "dp-attack-row-ty-dp-ts-attack-row-sl-19279",
    docNum: 1858,
    deleted: 0,
    size: "4 mb",
    valid: false,
  },
  {
    id: 6,
    logName: "dp-attack-row-ty-dp-ts-attack-row-sl-19279",
    docNum: 100658,
    deleted: 0,
    size: "5.3 mb",
    valid: true,
  },
  {
    id: 7,
    logName: "dp-attack-row-ty-dp-ts-attack-row-sl-19279",
    docNum: 195682,
    deleted: 50,
    size: "2.3 mb",
    valid: true,
  },
];

const IndexModal = ({ isOpen, handleClose }) => {
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle
        style={{ background: "#1F3242", color: "#EEEEEE", width: "1010px" }}
      >
        Log Index
      </DialogTitle>
      <DialogContent
        style={{
          background: "#142230",
          paddingBlockStart: "20px",
          width: "1010px",
          height: "500px",
        }}
      >
        <IndexGridWrap>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={9}
            rowsPerPageOptions={[9]}
            disableSelectionOnClick
            disableColumnMenu
            getRowClassName={(params) =>
              `log-index-row-${params.row.valid ? "valid" : "notValid"}`
            }
          />
        </IndexGridWrap>
      </DialogContent>
      <DialogActions style={{ background: "#1F3242", width: "1010px" }}>
        <Button variant={"outline"} onClick={handleClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default IndexModal;
