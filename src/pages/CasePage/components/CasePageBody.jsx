import { Card } from "../../../components/card/Card";
import { Chart } from "../../../components/charts/Chart";
import { Legend } from "../../../components/charts/Legend";
import { pieConfig } from "./charts-config";

export function CasePageBody() {
  return (
    <div style={{ display: "flex", gap: "40px", marginTop: "40px" }}>
      <Card cardTitle={"Expectetion"}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              width: "200px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            {pieConfig.data.datasets[0].backgroundColor.map((color, idx) => (
              <Legend color={color} text={data.labels[idx]} />
            ))}
          </div>
          <div>
            <Chart config={pieConfig} />
          </div>
        </div>
      </Card>
      <Card cardTitle={"Expectetion"}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              width: "200px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            {data.datasets[0].backgroundColor.map((color) => (
              <Legend color={color} text={"expect"} />
            ))}
          </div>
          <div>
            <Chart config={pieConfig} />
          </div>
        </div>
      </Card>
    </div>
  );
}
