import { Label } from "./Label";
import * as Style from "./CaseSummary.style";
import DoneIcon from "@mui/icons-material/Done";
import ErrorIcon from "@mui/icons-material/Error";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const CaseSummary = ({ data }) => {
  const { date, version, upgrades, devices } = data;

  const upgradeValues =
    upgrades.length === 0
      ? "Installed from OVA"
      : upgrades.map(({ from, to, success }) => {
          const Icon = success ? DoneIcon : ErrorIcon;
          return (
            <div>
              <Icon
                style={{
                  fill: success ? "green" : "red",
                  position: "relative",
                  top: "3px",
                  marginInlineEnd: "5px",
                }}
              />
              {from}{" "}
              <ArrowForwardIcon
                style={{
                  position: "relative",
                  top: "5px",
                  width: "20px",
                  fill: "rgb(54,162,235)",
                }}
              />{" "}
              {to}
            </div>
          );
        });

  return (
    <Style.Wrapper>
      <div>
        <Label title="File Generation Date" value={date[0]} />
        <Label
          title="Version"
          value={version.map((item) => (
            <>
              {item}
              <br />
            </>
          ))}
        />
        <Label title="Upgrades" value={upgradeValues} />
      </div>
      <div>
        <Label title="Number Of Devices" value={devices.count} />
        <Label title="Number Of DPs" value={devices.number_of_dps} />
        <Label title="Devices" value={"temp"} />
      </div>
      <div></div>
    </Style.Wrapper>
  );
};
