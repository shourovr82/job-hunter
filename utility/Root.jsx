import React from "react";
import Header from "../Components/Header/Header";
import Layout from "../pages/Layout/Layout";

const Root = ({ children }) => {
  return (
    <div className="container mx-auto">
      <Header />
      <Layout>{children}</Layout>

      {/* <Footer/> */}
    </div>
  );
};

export default Root;
