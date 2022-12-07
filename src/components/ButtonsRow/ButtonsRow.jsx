import React from "react";
import { Button } from "../inputs/button.style";
import { ButtonsRowWrap } from "./ButtonsRow.style";

const ButtonsRow = () => {
  return (
    <ButtonsRowWrap>
      <Button> Auto check Profile</Button>
      <Button> Graphana</Button>
      <Button> Support File Logs</Button>
      <Button> Index Modal</Button>
    </ButtonsRowWrap>
  );
};

export default ButtonsRow;
