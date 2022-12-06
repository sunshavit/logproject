import React, { useContext } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { TableWrapper } from "./CaseTable.style";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { AppContext } from "../../App";

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

const CaseTable = () => {
  const { casesRows } = useContext(AppContext);
  const navigate = useNavigate();

  const handleEvent = (params) => {
    navigate(`/${params.id}`);
  };

  if (casesRows.isLoading) return <h3>Loading...</h3>

  return (
    <TableWrapper>
      <Box
        sx={{
          height: 639,
          width: "100%",
          margin: "auto",
          padding: "30px",
          backgroundColor: "#1f3242",
          borderRadius: "5px",
        }}
      >
        <DataGrid
          rows={casesRows.data}
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
