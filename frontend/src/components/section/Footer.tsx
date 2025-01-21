import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-primary py-10">
      <div className="section-pd-x flex justify-between items-center">
        <Link to="/">
          <p className="fs-body-lg text-light tracking-tight">Havenly.com</p>
        </Link>
        <span className="text-light tracking-tight">
          <p className="cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer">Terms of Service</p>
        </span>
      </div>
    </div>
  );
};

export default Footer;
