import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Container({ children, className }: ContainerProps) {
  return <div className={`mx-14 mb-10 ${className}`}>{children}</div>;
}
