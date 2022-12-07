const data = {
  text: 'something in the indicies is wrong.the wrong index was migrated from cVision.\n \
As a workaround, you can delete the index with the following command:\n \
Open a bug to the dev to fix migration for this index: "vrm-scheduled-report-result-ty-vrm-scheduled-report-result-sl-1-ty-vrm-scheduled-report-result-ty-vrm-scheduled-report-result.',
};

export const autoCheckService = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(data);
    }, 10000);
  });
};
