import React from "react";
import { Link } from "react-router-dom";

interface LinkProps {
  text: string; // Button text
  href?: string; // Link target, optional
  textColorClass?: string | "text-light";
}

const PageLink: React.FC<LinkProps> = ({ text, href, textColorClass }) => {
  return (
    <Link to={href || "#"}>
      <span className={textColorClass}>{text}</span>
    </Link>
  );
};

export default PageLink;
