import React, { useState } from "react";
import { ConfigProvider, Table } from "antd";
import { CardContainer } from ".";
import styled from "styled-components";

const EmptyCard = () => {
  return (
    <CardContainer>
      <h3>Asset not selected</h3>
      <p>Please select your Asset</p>
    </CardContainer>
  );
};

export default EmptyCard;
