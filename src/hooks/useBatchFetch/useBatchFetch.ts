import { useQueries } from "@tanstack/react-query";

import { fetchHttp } from "@/services/http";

import { fetchQueriesParams } from "./types";

export default function useBatchFetch<T>(
  queriesParams: fetchQueriesParams,
  staleTime: number
) {
  const queriesDefinitions = queriesParams.map((fetchQueryParams) => ({
    queryFn: () =>
      fetchHttp<T>(fetchQueryParams).then((response) => response.data),
    queryKey: fetchQueryParams.map((query) => ["fixtures-by" + query.key]),
    staleTime: staleTime,
  }));

  const queries = useQueries({
    queries: queriesDefinitions,
    combine: (results) => {
      return {
        data: results.map((result) => result.data!),
        isSuccess: results.every((result) => result.isSuccess),
      };
    },
  });

  return queries;
}
