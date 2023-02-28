import React from "react";
import axios from "axios";
import { PaymentCodeContainer, CopyIcon, ShareIcon, CopyButton } from ".";
import { CheckCircleOutlined } from "@ant-design/icons";
import { notification } from "antd";

const CurrencyCardId = ({ asset, address, paymentInformation }) => {
  const [api, contextHolder] = notification.useNotification();
  // const [address, setAddress] = useState();

  const openNotification = () => {
    {
      api.open({
        className: "notification-box-container",
        icon: <CheckCircleOutlined style={{ color: "green" }} />,
        message: "Copy to Clipboard",
        duration: 0,
      });
    }
  };

  const copyToClipboard = (address) => {
    const requiredAsset = paymentInformation?.requestedAssets?.find((_) => _?.symbol === asset?.symbol && _?.network === asset?.network);
    var aux = document.createElement("input");
    aux.setAttribute("value", requiredAsset ? `${requiredAsset?.address}` : `${address}`);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
  };

  return (
    <PaymentCodeContainer>
      <p>{address}</p>
      {contextHolder}
      <CopyButton onClick={openNotification}>
        <CopyIcon onClick={() => copyToClipboard(address)} />
      </CopyButton>
      <a href={`${asset?.symbol}`} target="_blank">
        <ShareIcon />
      </a>
    </PaymentCodeContainer>
  );
};

export default CurrencyCardId;
