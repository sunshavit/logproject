import CaseTable from "../../CaseTable/CaseTable";
import { Header } from "../../components/header/Header";

export function HomePage() {
  return (
    <div className="App">
      <Header />
      <div className="YOdan">
        <CaseTable />
      </div>
    </div>
  );
}