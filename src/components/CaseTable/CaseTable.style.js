import styled from "styled-components";

export const TableWrapper = styled.div`
  width: 100%;
  margin: auto;
  padding: 30px;
  background-color: #1f3242;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 685px;
  .css-1e2bxag-MuiDataGrid-root {
    border: 1px solid #314b64;
  }
  .MuiDataGrid-columnHeaders {
    background-color: #314b64;
    border-bottom: none;
    color: white;
  }
  .MuiDataGrid-cellContent {
    color: #eeeeee;
  }
  .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-cell {
    border-bottom: 1px solid #314b64;
  }
  .css-rtrcn9-MuiTablePagination-root {
    color: #eeeeee;
  }
  .MuiDataGrid-row {
    cursor: pointer;
  }
  .css-1pe4mpk-MuiButtonBase-root-MuiIconButton-root {
    color: white;
  }
  .MuiDataGrid-iconSeparator {
    display: none;
  }
  .css-17jjc08-MuiDataGrid-footerContainer {
    border-top: none;
  }
`;
