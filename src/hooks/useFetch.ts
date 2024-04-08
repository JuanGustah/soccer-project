import { useQuery } from "@tanstack/react-query";
import api from "../services/api";

type queryParam = {
  key: string;
  value: string;
};

async function fetchHttp(queryParam: queryParam) {
  const response = await api(`fixtures?${queryParam.key}=${queryParam.value}`);
  return response;
}

export default function useFetch(queryParam: queryParam, queryKeys: string[]) {
  const query = useQuery({
    queryFn: () => {
      fetchHttp(queryParam);
    },
    queryKey: queryKeys,
  });

  return query;
}
