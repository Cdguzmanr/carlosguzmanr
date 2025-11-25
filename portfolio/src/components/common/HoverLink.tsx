import React from "react";
import { Link, type LinkProps } from "react-router-dom";

interface HoverLinkProps extends LinkProps {
  name: string;
  className?: string;
}

const HoverLink: React.FC<HoverLinkProps> = ({
  name,
  className = "",
  target = "_self",
  ...rest // spread the remaining LinkProps, so I can pass the default 'to', 'state', etc.
}) => {
  return (
    <Link
      target={target}
      className={`group font-caviardreams ${className}`}
      {...rest}
    >
      {name}
      <span className="w-0 group-hover:w-full transition-all duration-300 border-b-2 bg-neutral1 block"></span>
    </Link>
  );
};

export default HoverLink;
