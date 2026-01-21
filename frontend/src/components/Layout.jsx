import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-[112px]">
        {" "}
        {/* Padding top to account for fixed navbar */}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
