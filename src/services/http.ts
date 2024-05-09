import api from "./api";
import { queryParam } from "../types/queryParams";

export async function fetchHttp(queryParam: queryParam[]) {
  const params = queryParam.reduce(
    (acc, query) => acc + query.key + "=" + query.value + "&",
    ""
  );
  const endpoint = `fixtures?${params}`;

  const response = await api.get(endpoint);
  return response;
}
