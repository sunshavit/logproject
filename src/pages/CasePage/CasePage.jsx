import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../../App";
import { Header } from "../../components/header/Header";
import { Button } from "../../components/inputs/button.style";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, TitleHeadWrap, SingleTitle, TitleName } from "./CasePage.style";
import { Chart } from "../../components/charts/Chart";
import ButtonsRow from "../../components/ButtonsRow/ButtonsRow";

const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};

const config = {
  type: "pie",
  data: data,
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
  },
};

export function CasePage() {
  const { casesRows } = useContext(AppContext);
  const navigate = useNavigate();
  const { caseId } = useParams();

  if (!casesRows.data) return <h3>Loading...</h3>;
  const row = casesRows.data.find((row) => row.id === parseInt(caseId));

  return (
    <div>
      <Header />
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TitleHeadWrap>
          <SingleTitle>
            <TitleName>Case ID</TitleName>
            <h2>{row.caseId}</h2>
          </SingleTitle>
          <SingleTitle>
            <TitleName>File Name</TitleName>
            <h2>{row.fileName}</h2>
          </SingleTitle>
          <SingleTitle>
            <TitleName>Customer</TitleName>
            <h2>{row.customer}</h2>
          </SingleTitle>
        </TitleHeadWrap>

        <Button variant="outline" onClick={() => navigate("/")}>
          <ArrowBackIcon />
          Back To Home
        </Button>
      </Box>
      <ButtonsRow />
      <div style={{ display: "flex", gap: "40px" }}>
        <Box>
          <Chart config={config} />
        </Box>
        <Box>
          <Chart config={config} />
        </Box>
      </div>
    </div>
  );
}
