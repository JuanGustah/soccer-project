import React from "react";
import { Link, LinkProps } from "react-router-dom";

interface IIconButtonProps extends LinkProps {
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
}

export default function IconButton({ icon: Icon, ...rest }: IIconButtonProps) {
  return (
    <Link
      className="h-9 w-9 border-dark text-dark border-4 rounded-full flex justify-center items-center transition hover:bg-dark hover:text-white"
      {...rest}
    >
      <Icon height={18} width={18} />
    </Link>
  );
}
