import api from "./api";
import { fetchQueryParam } from "@/types/fetchQueryParam";

export async function fetchHttp<T>(fetchQueryParams: fetchQueryParam[]) {
  const params = fetchQueryParams.reduce(
    (acc, query) => acc + query.key + "=" + query.value + "&",
    ""
  );
  const endpoint = `fixtures?${params}`;

  const response = await api.get<T>(endpoint);
  return response;
}
