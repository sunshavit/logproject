import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import { Button } from "../inputs/button.style";
import { autoCheckService } from "./mockService";
import {
  LoadingText,
  ResText,
  CommendWrap,
  CommendText,
  Wrap,
} from "./AutoCheckModal.style";

const AutoCheckModal = ({ isOpen, handleClose }) => {
  const [{ isLoading, data }, setAutoCheckRes] = useState({
    isLoading: true,
    data: null,
  });

  useEffect(() => {
    if (isOpen) {
      autoCheckService().then((res) =>
        setAutoCheckRes({ isLoading: false, data: res })
      );
    }
    return () => {
      setAutoCheckRes({ isLoading: true, data: null });
    };
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle
        style={{ background: "#1F3242", color: "#EEEEEE", width: "1000px" }}
      >
        Auto check Profile
      </DialogTitle>
      <DialogContent
        style={{
          background: "#142230",
          paddingBlockStart: "20px",
          width: "1000px",
          height: "500px",
        }}
      >
        {isLoading ? (
          <LoadingText>Checking for Errors...</LoadingText>
        ) : (
          <>
            <ResText>{data.text}</ResText>
            <ResText>for workaround ,run this command:</ResText>
            <Wrap>
              <CommendWrap>
                <CommendText>{`curl -HContent-Type:application/json -XPOST localhost:9200/_reindex?pretty -d'{
             "source": {
      "index": "vrm-scheduled-report-result-ty-vrm-scheduled-report-result-sl-1-ty-vrm-scheduled-report-result-ty-vrm-scheduled-report-result"
    },
    "dest": {
      "index": "vrm-scheduled-report-result-2-ty-vrm-scheduled-report-result"
    }
  }'`}</CommendText>
              </CommendWrap>
              <CommendWrap>
                <CommendText>
                  {`curl -XDELETE localhost:9200/"vrm-scheduled-report-result-ty-vrm-scheduled-report-result-sl-1-ty-vrm-scheduled-report-result-ty-vrm-scheduled-report-result"`}
                </CommendText>
              </CommendWrap>
            </Wrap>
          </>
        )}
      </DialogContent>
      <DialogActions style={{ background: "#1F3242", width: "1000px" }}>
        <Button variant={"outline"} onClick={handleClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AutoCheckModal;
