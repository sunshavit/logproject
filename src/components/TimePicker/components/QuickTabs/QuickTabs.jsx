import React from 'react';
import { tabsArr } from './timeRanges';
import { TabsContainer, SingleTab } from './QuickTabs.style';

const QuickTabs = ({ selectedTimeFrame, handleQuickTime }) => (
  <TabsContainer data-debug-id="TimeFrameSelector">
    {tabsArr.map(tab => (
      <SingleTab
        onClick={() => handleQuickTime(tab)}
        isSelected={selectedTimeFrame.display === tab.display}
        key={tab.display}
        data-debug-id={`TimeFrameSelector_${tab.display}`}
      >
        {tab.display}
      </SingleTab>
    ))}
  </TabsContainer>
);

export default QuickTabs;
