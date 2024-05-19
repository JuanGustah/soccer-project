import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  children: React.ReactNode;
  htmlTag: keyof JSX.IntrinsicElements;
}

export default function Container({
  children,
  className,
  htmlTag: Tag,
  ...props
}: ContainerProps) {
  return (
    <Tag className={`mx-14 mb-10 ${className}`} {...props}>
      {children}
    </Tag>
  );
}
