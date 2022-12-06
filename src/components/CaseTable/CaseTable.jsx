import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../App";
import { DataGrid } from "@mui/x-data-grid";
import { TableWrapper, SearchWrap } from "./CaseTable.style";
import { TextField } from "../inputs/textField.style";
import { Button } from "../inputs/button.style";

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
  const [searchInput, setSearchInput] = useState("");
  const { casesRows } = useContext(AppContext);
  const navigate = useNavigate();

  const handleEvent = (params) => {
    navigate(`/${params.id}`);
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearchInput(value);
  };

  if (casesRows.isLoading) return <h3>Loading...</h3>;

  return (
    <TableWrapper>
      <SearchWrap>
        <TextField
          value={searchInput}
          onChange={(e) => handleInputChange(e)}
          placeholder="search"
        />
        <Button onClick={() => setSearchInput("")} variant="outline">
          clear
        </Button>
      </SearchWrap>
      <DataGrid
        rows={casesRows.data.filter(
          ({ caseId, fileName }) =>
            caseId.toLowerCase().includes(searchInput.toLowerCase()) ||
            fileName.toLowerCase().includes(searchInput.toLowerCase())
        )}
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
