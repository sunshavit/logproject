import moment from "moment";
import { tabsArr } from "./components/QuickTabs/timeRanges";

export const setDefaultTime = (eventDuration, primaryTime) => {
  const defaultTime = primaryTime || {
    ...tabsArr[0],
    fromDate: setFrom("15m"),
    toDate: Date.now(),
  };
  return eventDuration
    ? {
        fromDate: eventDuration.fromDate,
        toDate: eventDuration.toDate,
        display: "Event Duration",
        type: "eventDuration",
      }
    : defaultTime;
};

export const getDate = (iso, dateFormat) => {
  const d = new Date(iso);
  const month = d.getMonth() + 1;
  const day = `0${d.getDate()}`.slice(-2);
  const year = d.getFullYear();
  const hour = `0${d.getHours()}`.slice(-2);
  const minutes = `0${d.getMinutes()}`.slice(-2);
  switch (dateFormat) {
    case "dd.MM.yyyy":
      return `${day}.${month}.${year}  ${hour}:${minutes}`;
    case "dd/MM/yyyy":
      return `${day}/${month}/${year}  ${hour}:${minutes}`;
    case "MM/dd/yyyy":
      return `${month}/${day}/${year}  ${hour}:${minutes}`;
    default:
      return `${month}.${day}.${year}  ${hour}:${minutes}`;
  }
};

export const getHour = (date) => {
  const d = date ? new Date(date) : new Date();
  const hour = d.getHours();
  const minutes = d.getMinutes();
  return { hour, minutes };
};

export const setDateHour = (date, clock) => {
  if (!clock) {
    const { hour, minutes } = getHour();
    return new Date(date).setHours(hour, minutes);
  }
  const { hour, minutes } = clock;
  return new Date(date).setHours(hour, minutes);
};

export const isDateValid = (selectedTimeFrame) => {
  const { from, to } = selectedTimeFrame;
  const dif = to.date - from.date;
  const dateNow = Date.now();
  return from.date <= dateNow && to.date <= dateNow && dif >= 60000;
};

export const setFrom = (timeFrame) => {
  switch (timeFrame.display) {
    case "15m":
      return moment().subtract(15, "minutes").valueOf();
    case "30m":
      return moment().subtract(30, "minutes").valueOf();
    case "1H":
      return moment().subtract(1, "hours").valueOf();
    case "3H":
      return moment().subtract(3, "hours").valueOf();
    case "6H":
      return moment().subtract(6, "hours").valueOf();
    case "12H":
      return moment().subtract(12, "hours").valueOf();
    case "24H":
      return moment().subtract(24, "hours").valueOf();
    default:
      return moment().subtract(15, "minutes").valueOf();
  }
};
