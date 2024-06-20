import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Banner from "./Banner";

interface LayoutProps {
  show?: boolean;
  showNavbar?: boolean;
  showFooter?: boolean;
  transparentBackground?: boolean;
  backgroundClass?: string;
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  showNavbar = true,
  showFooter = true,
  show = true,
  transparentBackground = false,
  backgroundClass = "",
  children,
}) => {
  return (
    <div
      className={`max-w-430px ${
        transparentBackground ? "bg-transparent" : ""
      } ${backgroundClass}`}
    >
      {showNavbar && <Navbar />}
      <header>{show && <Banner />}</header>
      <main>{children}</main>
      {showFooter && <Footer />}
    </div>
  );
};

export default Layout;
