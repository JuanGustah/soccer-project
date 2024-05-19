import { LinkProps } from "react-router-dom";

export interface IIconButtonProps extends LinkProps {
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
}
