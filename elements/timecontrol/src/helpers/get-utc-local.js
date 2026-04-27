export default function getUTCLocalDateTime(date, showUTC, isStart) {
  return showUTC
    ? date.includes("T")
      ? date
      : date + (isStart ? "T00:00:00Z" : "T23:59:59Z")
    : date;
}
