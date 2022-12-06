import { useState } from "react";
import * as Style from "./App.style";
import CaseTable from "./CaseTable/CaseTable";
import { Button } from "./components/inputs";
function App() {
  return (
    <div className="App">
      <Style.Header>
        <h1>Logo</h1>
        <div>
          <Button>UPLOAD</Button>
        </div>
      </Style.Header>
      <div className="YOdan">
        <CaseTable />
      </div>
    </div>
  );
}

export default App;
