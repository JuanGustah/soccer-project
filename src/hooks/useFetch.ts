import { useQuery } from "@tanstack/react-query";

import { fetchHttp } from "../services/http";

import { queryParam } from "../types/queryParams";

export default function useFetch(queryParams: queryParam[]) {
  const query = useQuery({
    queryFn: () => fetchHttp(queryParams),
    queryKey: queryParams.map((query) => ["fixtures-by" + query.key]),
    staleTime: 60 * 60 * 24 * 1000,
  });

  return query;
}
