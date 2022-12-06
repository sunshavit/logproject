import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { TableWrapper } from "./CaseTable.style";
import { Navigate } from "react-router-dom";
import Box from "@mui/material/Box";

const columns = [
  { field: "id", headerName: "ID", width: 90, sortable: false },
  {
    field: "caseName",
    headerName: "Case Name",
    width: 150,
    sortable: false,
  },

  {
    field: "date",
    headerName: "Date",
    type: "dateTime",
    width: 250,
    valueGetter: ({ value }) => value && new Date(value),
    align: "left",
  },
  {
    field: "customer",
    headerName: "Customer",
    sortable: false,
    width: 160,
  },
];

const rows = [
  {
    id: 1,
    caseName: "SC1115",
    date: 1652913512000,
    customer: "Bank Of Colombia",
  },
  { id: 2, caseName: "SC1455", date: 1670333912000, customer: "Tiger Lili" },
  { id: 3, caseName: "SC7785", date: 1670506712000, customer: "Mitzi" },
  { id: 4, caseName: "SC9652", date: 1655566712000, customer: "Amazon" },
  { id: 5, caseName: "SC8456", date: 1660837112000, customer: "Nit LTD" },
  { id: 6, caseName: "SC9652", date: 1645223912000, customer: "Sun RobotiSC" },
  { id: 7, caseName: "SC5565", date: 1652913512000, customer: "Adon Menashe" },
  {
    id: 8,
    caseName: "SC2223",
    date: 1652913512000,
    customer: "SuperX Software",
  },
  {
    id: 9,
    caseName: "SC5696",
    date: 1652913512000,
    customer: "Yoni Boston Hadati",
  },
];

const CaseTable = () => {
  const handleEvent = (params) => {
    console.log("/" + params.id, redirect);
    <Navigate to={`/${params.id}`} />;
  };

  return (
    <TableWrapper>
      <Box
        sx={{
          height: 640,
          width: "100%",
          margin: "auto",
          padding: "30px",
          backgroundColor: "#1f3242",
          borderRadius: "5px",
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={9}
          rowsPerPageOptions={[9]}
          disableSelectionOnClick
          disableColumnMenu
          onRowClick={handleEvent}
        />
      </Box>
    </TableWrapper>
  );
};

export default CaseTable;
