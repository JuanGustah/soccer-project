import { dateHelper } from "@/helpers/date.helper";
import useFetch from "../useFetch";

export default function useTodayFixtures<T>() {
  const today = dateHelper();

  const todayFetch = useFetch<T>(
    [
      {
        key: "date",
        value: today.format("YYYY-MM-DD"),
      },
    ],
    60 * 60 * 24 * 1000
  );

  return todayFetch;
}
