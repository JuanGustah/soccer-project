import React, { ButtonHTMLAttributes } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
}

export default function IconButton({ icon: Icon }: IconButtonProps) {
  return (
    <button className="h-9 w-9 border-dark text-dark border-4 rounded-full flex justify-center items-center transition hover:bg-dark hover:text-white">
      <Icon height={18} width={18} />
    </button>
  );
}
