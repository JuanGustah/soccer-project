import { useQuery } from "@tanstack/react-query";

import { fetchHttp } from "@/services/http";

import { queryParam } from "./types";

export default function useFetch<T>(
  queryParams: queryParam[],
  staleTime: number
) {
  const query = useQuery({
    queryFn: () => fetchHttp<T>(queryParams).then((response) => response.data),
    queryKey: queryParams.map((query) => ["fixtures-by" + query.key]),
    staleTime,
  });

  return query;
}
