import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  > div {
    width: 100%;
    height: 300px;
    flex-grow: 1;
  }
  > div:nth-child(2) {
    border-right: 1px solid #8691bd;
    border-left: 1px solid #8691bd;
    padding-inline: 20px;
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
  padding-inline: 20px;
  table {
    width: 100%;
  }
  tbody {
    overflow: auto;
    td div {
      padding: 5px;
      width: 100px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`;
