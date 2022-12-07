import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import { Button } from "../inputs/button.style";
import { Chart } from "../charts/Chart";
import { Legend, LegendWrapper } from "../charts/Legend";

const PieModal = ({ isOpen, handleClose, pieConfig }) => {
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle style={{ background: "#1F3242", color: "#EEEEEE" }}>
        Exception
      </DialogTitle>
      <DialogContent
        style={{
          background: "#142230",
          paddingBlockStart: "20px",
          width: "500px",
          height: "500px",
          color: "white",
        }}
      >
        <div
          onClick={() => setIsPieModalOpen(true)}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <LegendWrapper>
            {pieConfig.data.datasets[0].backgroundColor.map((color, idx) => (
              <Legend
                key={idx}
                color={color}
                text={pieConfig.data.labels[idx]}
              />
            ))}
          </LegendWrapper>
          <div>
            <Chart config={pieConfig} />
          </div>
        </div>
      </DialogContent>
      <DialogActions style={{ background: "#1F3242" }}>
        <Button variant={"outline"} onClick={handleClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PieModal;
