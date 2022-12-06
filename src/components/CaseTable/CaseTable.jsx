import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../App";
import { DataGrid } from "@mui/x-data-grid";
import { TableWrapper } from "./CaseTable.style";
import { TextField } from "../inputs/textField.style";

const columns = [
  {
    field: "caseId",
    headerName: "Case ID",
    width: 150,
    sortable: false,
  },
  {
    field: "fileName",
    headerName: "File Name",
    width: 350,
    sortable: false,
  },

  {
    field: "date",
    headerName: "Upload Date",
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

  if (casesRows.isLoading) return <h3>Loading...</h3>;

  return (
    <TableWrapper>
      <TextField placeholder="search" />
      <DataGrid
        rows={casesRows.data}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        disableSelectionOnClick
        disableColumnMenu
        onRowClick={handleEvent}
      />
    </TableWrapper>
  );
};

export default CaseTable;
