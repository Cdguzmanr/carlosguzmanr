import React from "react";
import { Link, type LinkProps } from "react-router-dom";

interface RoundLinkProps extends LinkProps {
  name: string;
  className?: string;
}

const RoundLink: React.FC<RoundLinkProps> = ({
  name,
  className = "",
  target = "_self",
  ...rest // spread the remaining LinkProps, so I can pass the default 'to', 'state', etc.
}) => {
  return (
    <Link
      target={target}
      rel="noopener noreferrer"
      className={`font-bebas text-xl text-primary1 hover:bg-primary1 hover:text-neutral2 transition-all duration-300 rounded-full border-solid border-3 p-2 border-primary1 text-center ${className}`}
      {...rest}
    >
      {name}
    </Link>
  );
};

export default RoundLink;
