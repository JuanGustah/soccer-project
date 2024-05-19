import { QueryClient } from "@tanstack/react-query";
import { LoaderFunctionArgs } from "react-router-dom";

import { fetchHttp } from "@/services/http";

import { AxiosResponse } from "axios";
import { fixtureDetails } from "@/types/fixture";

export async function loader(
  queryCLient: QueryClient,
  { params }: LoaderFunctionArgs
) {
  const response: AxiosResponse = await queryCLient.ensureQueryData({
    queryKey: ["fixture", "details", params.fixtureId],
    queryFn: () => fetchHttp([{ key: "id", value: params.fixtureId! }]),
  });
  const fixture: fixtureDetails = response.data.response[0];
  return { fixture };
}
