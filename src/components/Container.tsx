import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-14">{children}</div>;
}
