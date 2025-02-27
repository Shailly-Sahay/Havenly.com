import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  text: string;
  href?: string;
  size?: "small" | "medium" | "large";
  className?: string;
  disabled?: boolean;
  action?: "button" | "submit" | "reset";
  type?: "primary" | "secondary";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  href,
  size = "medium", // Default size
  className = "",
  action = "button", // Default action
  type = "primary",
  onClick, // Click handler
  disabled = false,
}) => {
  const sizeClasses = {
    small: "py-1 px-3",
    medium: "py-2 px-4",
    large: "py-3 px-6",
  };

  const typeClasses =
    type === "primary" ? "bg-light text-dark" : "bg-primary text-light";

  const classes = `button rounded inline-block font-semibold text-center hover:opacity-90 transition-opacity flex justify-center items-center ${sizeClasses[size]} ${className} ${typeClasses}`;

  return href ? (
    <Link to={href} className={classes}>
      <span> {text}</span>
    </Link>
  ) : (
    <button
      disabled={disabled}
      type={action}
      className={classes}
      onClick={onClick}
    >
      <span> {text}</span>
    </button>
  );
};

export default Button;
