import React from "react";

export interface ISkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  height: number;
  width?: number;
  rounded: "rounded" | "rounded-full";
}
