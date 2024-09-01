import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";

const Layout = ({ children }) => {
  return (
    <div className="bg-backgroundColor">
      <NavbarComponent />
      {children}
      <FooterComponent />
    </div>
  );
};

export default Layout;
