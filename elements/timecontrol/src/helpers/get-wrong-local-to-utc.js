import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

export default function getWrongLocalFormatToUTCFormat(date) {
  const localFormat = "YYYY-MM-DD HH:mm:ss";
  return dayjs.utc(dayjs(date).format(localFormat), localFormat).format();
}
