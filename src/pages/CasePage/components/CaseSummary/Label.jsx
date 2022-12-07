import * as Style from "./CaseSummary.style";

export const Label = ({ title, value }) => {
  return (
    <Style.Label>
      <h4>{title}</h4>
      <div className="value">{value}</div>
    </Style.Label>
  );
};
