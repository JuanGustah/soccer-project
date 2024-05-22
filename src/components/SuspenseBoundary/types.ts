import { ReactNode } from "react";
import { FallbackProps } from "react-error-boundary";

export interface ISuspenseBoundary {
  children: ReactNode;
  FallbackComponent: ReactNode;
  ErrorComponent: (arg0: FallbackProps) => ReactNode;
}
