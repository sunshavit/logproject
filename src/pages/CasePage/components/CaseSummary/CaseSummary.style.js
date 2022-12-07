import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  > div {
    width: 100%;
    height: 300px;
    flex-grow: 1;
  }
  > div:nth-child(2) {
    border-left: 1px solid #314b64;
    padding-inline: 20px;
    width: 600px;
  }
`;

export const Label = styled.div`
  margin-block-end: 50px;
  h4 {
    color: #9e9e9e;
    font-weight: 200;
    margin-block-end: 5px;
  }
  .value {
    color: white;
    font-size: 18px;
  }
`;

export const DevicesList = styled.div`
  height: 100%;
  width: 600px;
  overflow-y: auto;
  overflow-x: hidden;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  table {
    padding-inline: 20px;
    border: 1px solid #314b64;
    width: 100%;
    border-collapse: collapse;
  }
  thead {
    position: sticky;
    top: -1px;
    background: #314b64;
    th {
      padding: 5px;
    }
  }
  tbody {
    td {
      border-bottom: 1px solid #314b64;
      div {
        padding: 5px;
        width: 120px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
`;
