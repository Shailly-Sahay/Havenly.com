import React from "react";
import { Header, Hero } from "../components/section";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
    </div>
  );
};

export default Layout;
