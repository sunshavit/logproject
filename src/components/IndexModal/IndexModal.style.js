import styled from "styled-components";

export const IndexGridWrap = styled.div`
  height: 460px;
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
  .log-index-row-notValid {
    background-color: rgb(97, 26, 21);
    &:hover {
      background-color: rgb(97, 26, 21) !important;
    }
  }
`;
