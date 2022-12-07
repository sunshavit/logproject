import React from 'react';
import { EventTabsContainer, EventSingleTab } from './EventDurationTabs.style';

const tabs = [
  { id: 'eventDuration', display: 'Event Duration' },
  { id: 'timeRange', display: 'Time Range' },
];

const EventDurationTabs = ({ pickerType, handleEventTabChange }) => (
  <EventTabsContainer>
    {tabs.map(tab => (
      <EventSingleTab
        onClick={() => handleEventTabChange(tab)}
        isSelected={pickerType === tab.id}
        key={tab.display}
        data-debug-id={`TimeFrameSelector_${tab.display}`}
      >
        {tab.display}
      </EventSingleTab>
    ))}
  </EventTabsContainer>
);

export default EventDurationTabs;
