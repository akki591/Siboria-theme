import React, { Children } from "react";
import Header from "@components/Layouts/Header";

const Layout = ({ children }) => {
  return (
    <div className="container p-4">
      <Header />
      <div className="mt-2">{children}</div>
    </div>
  );
};

export default Layout;
