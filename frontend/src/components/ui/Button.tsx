import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  text: string; // Button text
  href: string; // Link target
  size?: "small" | "medium" | "large"; // Button size
  className?: string; // Custom Tailwind classes
}

const Button: React.FC<ButtonProps> = ({
  text,
  href,
  size = "medium", // Default size
  className = "",
}) => {
  const sizeClasses = {
    small: "py-1 px-3 ",
    medium: "py-2 px-4 ",
    large: "py-3 px-6 ",
  };

  return (
    <Link
      to={href}
      className={`button inline-block font-semibold text-center hover:opacity-90 transition-opacity ${sizeClasses[size]} ${className}`}
    >
      {text}
    </Link>
  );
};

export default Button;
