import { useQuery } from "@tanstack/react-query";

import { fetchHttp } from "@/services/http";

import { fetchQueryParam } from "@/types/fetchQueryParam";

export default function useFetch<T>(
  queryParams: fetchQueryParam[],
  staleTime: number
) {
  const query = useQuery({
    queryFn: () => fetchHttp<T>(queryParams).then((response) => response.data),
    queryKey: queryParams.map((query) => ["fixtures-by" + query.key]),
    staleTime,
  });

  return query;
}
