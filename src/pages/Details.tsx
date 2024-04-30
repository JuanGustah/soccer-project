import React from "react";
import { useLoaderData, LoaderFunction } from "react-router-dom";

import Background from "../assets/images/background_details.png";

export const loader: LoaderFunction = async ({ params }) => {
  return { fixture: params.fixtureId };
};

export default function Details() {
  const { fixture } = useLoaderData() as { fixture: number };

  return (
    <React.Fragment>
      <img
        src={Background}
        alt="background image"
        className="absolute inset-0 w-full z-negative"
      />
      <p className="text-white">{fixture}</p>
    </React.Fragment>
  );
}
