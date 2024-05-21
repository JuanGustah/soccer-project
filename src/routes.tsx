import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Details, { loader as detailsLoader } from "./pages/Details";

import { client } from "./main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details/:fixtureId",
        element: <Details />,
        loader: detailsLoader.bind(null, client),
      },
    ],
  },
]);

export { router };
