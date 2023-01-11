import React from "react";
import Header from "../Components/Header/Header";
import Layout from "../pages/Layout/Layout";

const Root = ({ children }) => {
  return (
    <div className=" mx-auto wiwaxia text-sm font-semibold">
      <Header />
      <div className="container mx-auto">

        <Layout>{children}</Layout>
      </div>

      {/* <Footer/> */}
    </div>
  );
};

export default Root;
