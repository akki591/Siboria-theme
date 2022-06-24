import React, { Children } from "react";
import Header from "@components/Layouts/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container p-4">
        <div className="mt-2 mb-14">{children}</div>
      </div>
    </>
  );
};

export default Layout;
