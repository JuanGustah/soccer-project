import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import calendar from "dayjs/plugin/calendar";
import updateLocale from "dayjs/plugin/updateLocale";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import "dayjs/locale/pt-br";

dayjs.extend(timezone);
dayjs.extend(calendar);
dayjs.extend(updateLocale);
dayjs.extend(isSameOrAfter);
dayjs.locale("pt-br");

dayjs.updateLocale("pt-br", {
  calendar: {
    sameDay: "[Hoje]",
    nextDay: "[Amanhã]",
    nextWeek: "dddd",
    sameElse: "DD/MM",
  },
});

dayjs.tz.setDefault("America/Recife");

export { dayjs as dateHelper };
