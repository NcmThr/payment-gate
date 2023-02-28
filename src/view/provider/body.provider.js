import React, { createContext } from "react";
import { CardContainer } from ".";
const BodyProvider = ({ children }) => {
  const BodyContext = createContext();

  const contextValue = {};
  return (
    <BodyContext.Provider value={contextValue}>
      <CardContainer bordered={true}>{children}</CardContainer>
    </BodyContext.Provider>
  );
};

export default BodyProvider;
