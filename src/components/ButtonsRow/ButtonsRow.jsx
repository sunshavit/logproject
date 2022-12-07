import React from "react";
import { Button } from "../inputs/button.style";
import TimePicker from "../TimePicker/TimePicker";
import { ButtonsRowWrap } from "./ButtonsRow.style";

const ButtonsRow = () => {
  const setTimFrame = () => {};
  return (
    <ButtonsRowWrap>
      <Button> Auto check Profile</Button>
      <Button> Graphana</Button>
      <Button> Support File Logs</Button>
      <Button> Index Modal</Button>
      <TimePicker getTimeFrame={setTimFrame} />
    </ButtonsRowWrap>
  );
};

export default ButtonsRow;
