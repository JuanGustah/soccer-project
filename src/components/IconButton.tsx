import React from "react";
import { Link, LinkProps } from "react-router-dom";

type BaseProps = {
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  tag?: "button";
};
type LinkIconProps = LinkProps &
  React.RefAttributes<HTMLAnchorElement> & {
    tag: "link";
  };

type IconButtonProps = BaseProps & (ButtonProps | LinkIconProps);

export default function IconButton({ icon: Icon, ...rest }: IconButtonProps) {
  if (rest.tag === "link") {
    return (
      <Link
        className="h-9 w-9 border-dark text-dark border-4 rounded-full flex justify-center items-center transition hover:bg-dark hover:text-white"
        {...rest}
      >
        <Icon height={18} width={18} />
      </Link>
    );
  }

  return (
    <button
      className="h-9 w-9 border-dark text-dark border-4 rounded-full flex justify-center items-center transition hover:bg-dark hover:text-white"
      {...rest}
    >
      <Icon height={18} width={18} />
    </button>
  );
}
