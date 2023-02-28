import React, { createContext } from "react";
import Title from "../component/title/title";

const TitleProvider = ({ children }) => {
  const TitleContext = createContext();

  const contextValue = {};

  return (
    <TitleContext.Provider value={contextValue}>
      <Title />
      {children}
    </TitleContext.Provider>
  );
};

export default TitleProvider;
