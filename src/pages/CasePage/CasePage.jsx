import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../../App";
import { Header } from "../../components/header/Header";
import { Button } from "../../components/inputs/button.style";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, TitleHeadWrap, SingleTitle, TitleName } from "./CasePage.style";
import ButtonsRow from "../../components/ButtonsRow/ButtonsRow";
import { CasePageBody } from "./components/CasePageBody";

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
          border: "1px solid #314b64",
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
      <CasePageBody />
    </div>
  );
}
