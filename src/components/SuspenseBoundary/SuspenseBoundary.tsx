import React from "react";
import { ISuspenseBoundary } from "./types";
import { ErrorBoundary } from "react-error-boundary";

export default function SuspenseBoundary({
  children,
  FallbackComponent,
  ErrorComponent,
}: ISuspenseBoundary) {
  return (
    <ErrorBoundary FallbackComponent={ErrorComponent}>
      <React.Suspense fallback={FallbackComponent}>{children}</React.Suspense>;
    </ErrorBoundary>
  );
}
