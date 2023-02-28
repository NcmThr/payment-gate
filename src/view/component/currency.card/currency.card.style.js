import styled from "styled-components";
import { Card, QRCode, Button } from "antd";
import { SwapOutlined, CopyOutlined, ShareAltOutlined } from "@ant-design/icons";

export const CardContainer = styled(Card)`
  margin: 600px;
  margin: auto;
`;

export const CardTopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid gray;
  padding-bottom: 8px;
  margin-top: -10px;
  h3 {
    margin: auto;
  }
`;

export const SwapIcon = styled(SwapOutlined)`
  border: 1px solid gray;
  padding: 5px;
  border-radius: 5px;
`;

export const QrCodeContainer = styled(QRCode)`
  margin: auto;
  margin-top: 30px;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  h1 {
    padding: 0px !important;
    margin-right: 5px;
  }
  p {
    margin-bottom: 8px;
    font-size: large;
  }
`;

export const PaymentCodeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: blue;
  p {
    font-size: large;
    margin-right: 10px;
  }
`;

export const CopyButton = styled(Button)`
  box-shadow: none;
  border: none;
`;

export const CopyIcon = styled(CopyOutlined)`
  font-size: large;
  margin-right: 8px;
  color: blue;
`;

export const ShareIcon = styled(ShareAltOutlined)`
  font-size: large;
`;

export const BottomButton = styled(Button)`
  width: 500px;
`;
