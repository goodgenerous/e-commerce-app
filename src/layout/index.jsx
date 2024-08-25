import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";

const Layout = ({ children }) => {
  return (
    <>
      <NavbarComponent />
      {children}
      <FooterComponent />
    </>
  );
};

export default Layout;
