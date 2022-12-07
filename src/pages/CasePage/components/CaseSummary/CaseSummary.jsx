import { Label } from "./Label";
import * as Style from "./CaseSummary.style";
import DoneIcon from "@mui/icons-material/Done";
import ErrorIcon from "@mui/icons-material/Error";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const CaseSummary = ({ data }) => {
  const { date, version, upgrades, devices, is_data_migrated } = data;

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
        <Label
          title="Migrated from CVision"
          value={is_data_migrated ? "TRUE" : "FALSE"}
        />
      </div>
      <div>
        <Style.DevicesList>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>IP</th>
                <th>Platform</th>
                <th>Version</th>
              </tr>
            </thead>
            <tbody>
              {devices.devices.map((device) => (
                <tr>
                  <td>
                    <div>{device.deviceName}</div>
                  </td>
                  <td>
                    <div>{device.deviceIP}</div>
                  </td>
                  <td>
                    <div>{device.platformType}</div>
                  </td>
                  <td>
                    <div>{device.deviceVersion}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Style.DevicesList>
      </div>
    </Style.Wrapper>
  );
};
