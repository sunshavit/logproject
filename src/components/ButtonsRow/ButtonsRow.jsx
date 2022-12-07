import React, { useState } from "react";
import AutoCheckModal from "../AutoCheckModal/AutoCheckModal";
import GraphanaModal from "../GraphanaModal/GraphanaModal";
import IndexModal from "../IndexModal/IndexModal";
import { Button } from "../inputs/button.style";
import SupportFileModal from "../SupportFileModal/SupportFileModal";
import TimePicker from "../TimePicker/TimePicker";
import { ButtonsRowWrap, Container } from "./ButtonsRow.style";

const ButtonsRow = () => {
  const [openModal, setOpenModal] = useState({
    autoCheck: false,
    graphana: false,
    supportFile: false,
    index: false,
  });

  const handleClick = (name) => {
    setOpenModal((prev) => ({ ...prev, [name]: true }));
  };

  const handleModalClose = (name) => {
    setOpenModal((prev) => ({ ...prev, [name]: false }));
  };

  const setTimFrame = () => {};
  return (
    <Container>
      <ButtonsRowWrap>
        <Button onClick={() => handleClick("autoCheck")}>
          Auto check Profile
        </Button>
        <Button onClick={() => handleClick("graphana")}> Graphana</Button>
        <Button onClick={() => handleClick("supportFile")}>
          Support File Logs
        </Button>
        <Button onClick={() => handleClick("index")}> Log Index</Button>
      </ButtonsRowWrap>
      <TimePicker getTimeFrame={setTimFrame} />
      <AutoCheckModal
        isOpen={openModal.autoCheck}
        handleClose={() => handleModalClose("autoCheck")}
      />
      <GraphanaModal
        isOpen={openModal.graphana}
        handleClose={() => handleModalClose("graphana")}
      />
      <SupportFileModal
        isOpen={openModal.supportFile}
        handleClose={() => handleModalClose("supportFile")}
      />
      <IndexModal
        isOpen={openModal.index}
        handleClose={() => handleModalClose("index")}
      />
    </Container>
  );
};

export default ButtonsRow;
