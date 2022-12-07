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
    id: 6,
    valid: false,
    logName:
      "vrm-scheduled-report-result-ty-vrm-scheduled-report-result-sl-1-ty-vrm-scheduled-report-result-ty-vrm-scheduled-report-result",
    deleted: "0",
    docNum: "1",
    size: "7.7mb",
  },
  {
    id: 1,
    valid: true,
    logName:
      "dp-dns-rate-five-min-baseline-ty-dp-dns-rate-five-min-baseline-sl-19305",
    deleted: "0",
    docNum: "103680",
    size: "5.4mb",
  },
  {
    id: 2,
    valid: true,
    logName: "dp-packet-reporting-ty-dp-packet-reporting-sl-1370",
    deleted: "0",
    docNum: "21316",
    size: "12.9mb",
  },
  {
    id: 3,
    valid: true,
    logName: "dp-packet-reporting-ty-dp-packet-reporting-sl-1374",
    deleted: "0",
    docNum: "47165",
    size: "14.6mb",
  },
  {
    id: 4,
    valid: true,
    logName: "dp-packet-reporting-ty-dp-packet-reporting-sl-1373",
    deleted: "0",
    docNum: "103346",
    size: "32.1mb",
  },
  {
    id: 5,
    valid: true,
    logName: "dp-packet-reporting-ty-dp-packet-reporting-sl-1372",
    deleted: "0",
    docNum: "47858",
    size: "17.7mb",
  },

  {
    id: 7,
    valid: true,
    logName: "dp-packet-reporting-ty-dp-packet-reporting-sl-1371",
    deleted: "0",
    docNum: "20360",
    size: "8.8mb",
  },
  {
    id: 8,
    valid: true,
    logName: "dp-packet-reporting-ty-dp-packet-reporting-sl-1378",
    deleted: "0",
    docNum: "47273",
    size: "11.6mb",
  },
  {
    id: 9,
    valid: true,
    logName: "dp-packet-reporting-ty-dp-packet-reporting-sl-1377",
    deleted: "14976",
    docNum: "37507",
    size: "15.1mb",
  },
  {
    id: 10,
    valid: true,
    logName: "dp-packet-reporting-ty-dp-packet-reporting-sl-1376",
    deleted: "0",
    docNum: "52449",
    size: "13.9mb",
  },
  {
    id: 11,

    valid: true,
    logName: "dp-packet-reporting-ty-dp-packet-reporting-sl-1375",
    deleted: "0",
    docNum: "57650",
    size: "24.8mb",
  },
  {
    id: 12,
    valid: true,
    logName: "dp-attack-raw-ty-anti-scanning-sl-1376-sl-1376",
    deleted: "0",
    docNum: "2",
    size: "24.5kb",
  },
  {
    id: 13,
    valid: true,
    logName: "dp-daily-bdos-baseline-rate-ty-bdosbaselineedge-sl-105",
    deleted: "0",
    docNum: "0",
    size: "226b",
  },
  {
    id: 14,
    valid: true,
    logName: "dp-daily-bdos-baseline-rate-ty-bdosbaselineedge-sl-106",
    deleted: "0",
    docNum: "0",
    size: "226b",
  },
  {
    id: 15,
    valid: true,
    logName:
      "dp-daily-connection-statistics-ty-dp-connection-statistics-sl-107",
    deleted: "0",
    docNum: "0",
    size: "226b",
  },
  {
    id: 16,
    valid: true,
    logName: "ssl-inspect--12-12-5555",
    deleted: "0",
    docNum: "1",
    size: "7.8kb",
  },
  {
    id: 17,
    valid: true,
    logName:
      "dp-daily-connection-statistics-ty-dp-connection-statistics-sl-105",
    deleted: "0",
    docNum: "0",
    size: "226b",
  },
  {
    id: 18,
    valid: true,
    logName:
      "dp-daily-connection-statistics-ty-dp-connection-statistics-sl-106",
    deleted: "0",
    docNum: "0",
    size: "226b",
  },
  {
    id: 19,
    valid: true,
    logName: "dp-daily-bdos-baseline-rate-ty-bdosbaselineedge-sl-107",
    deleted: "0",
    docNum: "0",
    size: "226b",
  },
  {
    id: 20,
    valid: true,
    logName: "dp-attack-raw-ty-dos-sl-1368",
    deleted: "0",
    docNum: "13",
    size: "60.1kb",
  },
  {
    id: 21,
    valid: true,
    logName: "dp-attack-raw-ty-http__flood-sl-1363",
    deleted: "0",
    docNum: "0",
    size: "226b",
  },
  {
    id: 22,
    valid: true,
    logName: "dp-attack-raw-ty-dos-sl-1369",
    deleted: "0",
    docNum: "1",
    size: "17.3kb",
  },
  {
    id: 23,
    valid: true,
    logName: "dp-attack-raw-ty-http__flood-sl-1362",
    deleted: "0",
    docNum: "0",
    size: "226b",
  },
  {
    id: 24,
    valid: true,
    logName: "dp-attack-raw-ty-http__flood-sl-1365",
    deleted: "0",
    docNum: "0",
    size: "226b",
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
