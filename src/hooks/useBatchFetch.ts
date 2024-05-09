import { useQueries } from "@tanstack/react-query";

import { fetchHttp } from "../services/http";

import { queryParam } from "../types/queryParams";

type queriesParams = queryParam[][];

function makeQueryDefinition(queryParams: queryParam[]) {
  return {
    queryFn: () => fetchHttp(queryParams),
    queryKey: queryParams.map((query) => ["fixtures-by" + query.key]),
    staleTime: 60 * 60 * 24 * 1000,
  };
}

export default function useBatchFetch(queriesParams: queriesParams) {
  const queriesDefinitions = queriesParams.map((queryParams) =>
    makeQueryDefinition(queryParams)
  );

  const queries = useQueries({
    queries: queriesDefinitions,
    combine: (results) => {
      return {
        data: results.map((result) => result.data),
        isSuccess: results.every((result) => result.isSuccess),
      };
    },
  });

  return queries;
}
