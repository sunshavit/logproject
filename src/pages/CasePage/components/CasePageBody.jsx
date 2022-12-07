import { Card } from "../../../components/card/Card";
import { Chart } from "../../../components/charts/Chart";
import { Legend, LegendWrapper } from "../../../components/charts/Legend";
import { PageWrapper } from "./CasePageBody.style";
import { barConfig, pieConfig } from "./charts-config";

export function CasePageBody() {
  return (
    <PageWrapper>
      <Card cardTitle={"Stam"}>HEllo</Card>
      <Card cardTitle={"Expectetion"}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <LegendWrapper>
            {pieConfig.data.datasets[0].backgroundColor.map((color, idx) => (
              <Legend color={color} text={pieConfig.data.labels[idx]} />
            ))}
          </LegendWrapper>
          <div>
            <Chart config={pieConfig} />
          </div>
        </div>
      </Card>
      <div></div>
      <Card cardTitle={"Bar"}>
        <Chart config={barConfig} />
        <LegendWrapper isRow>
          {barConfig.data.datasets[0].backgroundColor.map((color) => (
            <Legend color={color} text={"expect"} />
          ))}
        </LegendWrapper>
      </Card>
    </PageWrapper>
  );
}
