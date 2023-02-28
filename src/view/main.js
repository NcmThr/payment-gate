import Layout from "./layout";
import React from "react";
import LoaderProvider from "./provider/loader.provider";

const Main = () => {
  return (
    <LoaderProvider>
      <Layout />
    </LoaderProvider>
  );
};

export default Main;
