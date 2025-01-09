import React from "react";
import { Header, Hero, Footer } from "../components/section";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <div className="section-pd-x py-10 flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
