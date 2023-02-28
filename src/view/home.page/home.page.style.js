import styled from "styled-components";
import { Table, Card } from "antd";

export const CardContainer = styled(Card)`
  width: 800px;
  margin: auto;
  h1 {
    text-align: start;
    padding: 0px 60px 30px;
  }
  h2 {
    text-align: start;
    padding: 25px 60px 0px;
  }
`;

export const BottomTable = styled(Table)`
  width: 600px;
  margin: auto;
`;

export const ProductText = styled.h4`
  margin: 0px;
`;
