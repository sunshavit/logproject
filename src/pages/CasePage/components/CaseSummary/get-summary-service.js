const data = {
  date: ["Fri 11 Nov 2022 09:51:48 AM UTC"],
  version: [
    "APSolute Vision 5.4.0 (build 321)",
    "branch: release ",
    "vDirect 4.19.0+1",
  ],
  upgrades: [
    {
      from: "5.3.0 build 218",
      to: "5.4.0 build 321",
      success: true,
    },
  ],
  devices: {
    count: 4,
    devices: [
      {
        deviceName: "'DH1B19DD03'",
        deviceIP: "'10.183.95.70'",
        platformType: "'DefensePro 20'",
        deviceVersion: "'8.30.0.0'",
      },
      {
        deviceName: "'DH2B10DD04'",
        deviceIP: "'10.183.95.71'",
        platformType: "'DefensePro 20'",
        deviceVersion: "'8.30.0.0'",
      },
      {
        deviceName: "'DRB15DD05'",
        deviceIP: "'10.183.98.35'",
        platformType: "'DefensePro 20'",
        deviceVersion: "'8.30.0.0'",
      },
      {
        deviceName: "'DRB16DD06'",
        deviceIP: "'10.183.98.36'",
        platformType: "'DefensePro 20'",
        deviceVersion: "'8.30.0.0'",
      },
    ],
    number_of_dps: 4,
  },
  migrated_from_cVision: true,
  profile: {
    allocated_memory: {
      number: 64,
      allowed_dps: 25,
      valid: true,
    },
    allocated_cpus: {
      number: 16,
      allowed_dps: 25,
      valid: true,
    },
  },
};

export function getSummary() {
  return new Promise((res) => {
    setTimeout(() => {
      res(data);
    }, 600);
  });
}
