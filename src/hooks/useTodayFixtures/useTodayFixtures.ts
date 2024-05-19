import { dateHelper } from "@/helpers/date.helper";
import { useFetch } from "../useFetch";

export default function useTodayFixtures<T>() {
  const today = dateHelper();

  const staleTime = 60 * 60 * 24 * 1000;
  const queriesParams = [
    {
      key: "date",
      value: today.format("YYYY-MM-DD"),
    },
    {
      key: "timezone",
      value: "America/Sao_Paulo",
    },
  ];

  const todayFetch = useFetch<T>(queriesParams, staleTime);

  return todayFetch;
}
