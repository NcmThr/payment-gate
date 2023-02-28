import styled from "styled-components";
import { Spin, Card } from "antd";

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

export const SpinContainer = styled(Spin)`
  background-color: white;
  height: 125vw;
  position: fixed;
  max-height: 94vw;
  margin-top: -120px;
  .ant-spin-nested-loading {
    position: absolute !important;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
  .ant-spin-nested-loading > div > .ant-spin {
    position: fixed;
    top: 0;
    inset-inline-start: 0;
    z-index: 4;
    display: block;
    width: 100%;
    height: 142%;
    background-color: white;
    margin-top: -120px;
  }
`;
