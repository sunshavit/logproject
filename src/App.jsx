import { useState } from "react";
import CaseTable from "./CaseTable/CaseTable";
import { Header } from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="YOdan">
        <CaseTable />
      </div>
    </div>
  );
}

export default App;
