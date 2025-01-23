import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui";
import { useAppContext } from "../../contexts/AppContext";

const Header = () => {
  const { isLoggedIn } = useAppContext();
  return (
    <div className="bg-primary py-6 ">
      <div className="section-pd-x flex justify-between">
        <Link to="/">
          <p className="fs-body-lg text-light tracking-tight">Havenly.com</p>
        </Link>

        {isLoggedIn ? (
          <>
            <Link to="/my-bookings">
              <p className="fs-body-lg text-light tracking-tight">
                My Bookings
              </p>
            </Link>
            <Link to="/my-hotels">
              <p className="fs-body-lg text-light tracking-tight">My Hotels</p>
            </Link>
            <Button text="Sign out" href="/" className="bg-light text-dark" />
          </>
        ) : (
          <span className="flex space-x-2">
            <Button text="Sign in" href="/" className="bg-light text-dark" />
          </span>
        )}
      </div>
    </div>
  );
};

export default Header;
