import React from "react";
import { QrCodeContainer } from ".";

const CurrencyCardQrCode = ({ paymentInformation, asset, address }) => {
  const requiredAsset = paymentInformation?.requestedAssets?.find((_) => _?.symbol === asset?.symbol && _?.network === asset?.network);

  return <>{<QrCodeContainer value={requiredAsset ? `${requiredAsset?.address}` : `${address}`} />}</>;
};

export default CurrencyCardQrCode;
