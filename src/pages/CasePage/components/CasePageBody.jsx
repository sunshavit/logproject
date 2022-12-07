import { useEffect, useState } from "react";
import { Card } from "../../../components/card/Card";
import { Chart } from "../../../components/charts/Chart";
import { Legend, LegendWrapper } from "../../../components/charts/Legend";
import PieModal from "../../../components/PieModal/PieModal";
import { PageWrapper } from "./CasePageBody.style";
import { CaseSummary } from "./CaseSummary/CaseSummary";
import { getSummary } from "./CaseSummary/get-summary-service";
import { barConfig, pieConfig } from "./charts-config";

export function CasePageBody() {
  const [summary, setSummary] = useState({ isLoading: true, data: null });
  const [isPieModalOpen, setIsPieModalOpen] = useState(false);

  useEffect(() => {
    getSummary().then((res) => setSummary({ isLoading: false, data: res }));
  }, []);

  const slicedPieConfig = () => {
    const slicedPieConfig = JSON.parse(JSON.stringify(pieConfig));

    slicedPieConfig.data.labels = pieConfig.data.labels.slice(0, 5);

    slicedPieConfig.data.datasets[0].data =
      pieConfig.data.datasets[0].data.slice(0, 5);

    slicedPieConfig.data.datasets[0].backgroundColor =
      pieConfig.data.datasets[0].backgroundColor.slice(0, 5);
    return slicedPieConfig;
  };

  return (
    <PageWrapper>
      <Card cardTitle={"Summary"}>
        {summary.isLoading ? "Loading..." : <CaseSummary data={summary.data} />}
      </Card>
      <Card cardTitle={"Exception"}>
        <div
          onClick={() => setIsPieModalOpen(true)}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <LegendWrapper>
            {slicedPieConfig().data.datasets[0].backgroundColor.map(
              (color, idx) => (
                <Legend
                  key={idx}
                  color={color}
                  text={slicedPieConfig().data.labels[idx]}
                />
              )
            )}
          </LegendWrapper>
          <div>
            <Chart config={slicedPieConfig()} />
          </div>
        </div>
      </Card>
      <PieModal
        pieConfig={pieConfig}
        isOpen={isPieModalOpen}
        handleClose={() => setIsPieModalOpen(false)}
      />
      {/* Yodan please do not remove this div. its pushing the bar to the side... */}
      <div></div>
    </PageWrapper>
  );
}
