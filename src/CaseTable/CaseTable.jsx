import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { TableWrapper } from "./CaseTable.style";

import Box from "@mui/material/Box";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "caseName",
    headerName: "Case Name",
    width: 150,
    sortable: false,
  },

  {
    field: "date",
    headerName: "Date",
    width: 150,
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
    caseName: "CS1115",
    date: "01-02-2021",
    customer: "Bank Of Colombia",
  },
  { id: 2, caseName: "CS1455", date: "01-11-2021", customer: "Tiger Lili" },
  { id: 3, caseName: "CS7785", date: "01-12-2021", customer: "Mitzi" },
  { id: 4, caseName: "CS9652", date: "14-08-2021", customer: "Amazon" },
  { id: 5, caseName: "CS8456", date: "01-09-2021", customer: "Nit LTD" },
  { id: 6, caseName: "CS9652", date: "19-12-2021", customer: "Sun Robotics" },
  { id: 7, caseName: "CS5565", date: "20-07-2021", customer: "Adon Menashe" },
  {
    id: 8,
    caseName: "CS2223",
    date: "05-12-2021",
    customer: "SuperX Software",
  },
  {
    id: 9,
    caseName: "CS5696",
    date: "07-06-2021",
    customer: "Yoni Boston Hadati",
  },
];

const CaseTable = () => {
  return (
    <TableWrapper>
      <Box sx={{ height: 580, width: "100%", margin: "auto" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          disableSelectionOnClick
        />
      </Box>
    </TableWrapper>
  );
};

export default CaseTable;
