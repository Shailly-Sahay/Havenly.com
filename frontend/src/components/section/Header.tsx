import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui";

const Header = () => {
  return (
    <div className="bg-primary py-6 ">
      <div className="section-pd-x flex justify-between">
        <Link to="/">
          <p className="fs-body-lg text-light tracking-tight">Havenly.com</p>
        </Link>
        <span className="flex space-x-2">
          <Button text="Sign in" href="/" className="bg-light text-dark" />
        </span>

        {/* <span className="flex space-x-2">
          <Link
            to="/sign-in"
            className="flex items-center text-blue-600 hover:bg-gray-100"
          >
            Sign In
          </Link>
        </span> */}
      </div>
    </div>
  );
};

export default Header;
