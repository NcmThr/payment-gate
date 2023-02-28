import React from "react";
import HomePage from "./home.page/home.page";
import BodyProvider from "./provider/body.provider";
import TitleProvider from "./provider/title.provider";
import { Provider } from "react-redux";
import store from "./redux/store";

const Layout = () => {
  return (
    <Provider store={store}>
      <BodyProvider>
        <TitleProvider>
          <HomePage />
        </TitleProvider>
      </BodyProvider>
    </Provider>
  );
};

export default Layout;
