import React, { createContext, useState } from "react";
import { Space, Spin } from "antd";
import "./../../App.css";

export const LoaderContext = createContext();

const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const contextValue = {
    isLoading: isLoading,
    setIsLoading: setIsLoading,
  };

  return (
    <LoaderContext.Provider value={contextValue}>
      {isLoading ? (
        <div>
          <Space
            direction="vertical"
            style={{
              width: "100%",
            }}
          >
            <Spin
              style={{ backgroundColor: "white", height: "125vw", position: "fixed", maxHeight: "94vw", marginTop: "-120px" }}
              tip="Loading"
              size="large"
            >
              <div className="content" />
            </Spin>
          </Space>
        </div>
      ) : null}
      {children}
    </LoaderContext.Provider>
  );
};

export default LoaderProvider;
