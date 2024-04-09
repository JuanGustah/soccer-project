import { useQuery } from "@tanstack/react-query";
import api from "../services/api";

type queryParam = {
  key: string;
  value: string;
};

async function fetchHttp(queryParam: queryParam) {
  const response = await api.get(
    `fixtures?${queryParam.key}=${queryParam.value}`
  );
  return response;
}

export default function useFetch(queryParam: queryParam) {
  const query = useQuery({
    queryFn: () => fetchHttp(queryParam),
    queryKey: ["fixtures-by-date", queryParam.value],
    staleTime: 60 * 60 * 24 * 1000,
  });

  return query;
}
