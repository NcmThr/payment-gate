import React, { useState, useEffect, useContext } from "react";
import "./../../../App.css";
import { CardContainer, CardTopContainer, SwapIcon, PriceContainer, BottomButton } from ".";
import { SwapOutlined } from "@ant-design/icons";
import CurrencyCardId from "./currency.card.id";
import CurrencyCardQrCode from "./currency.card.qr.code";
import { LoaderContext } from "./../../provider/loader.provider";

export const CurrencyCard = ({ asset, paymentInformation, paymentUniqueId, requestAsset, setPaymentInformation }) => {
  const { setIsLoading } = useContext(LoaderContext);
  const [address, setAddress] = useState();

  const getAssetAddressInfo = async (symbol, network) => {
    try {
      console.log(symbol);
      console.log(network);
      // https://gateapi.anargate.com/api/v1/payment/get_asset_info_by_id?paymentUniqueId=kl1lyphsrqpd6ftawk1kpyoirn0j1zlbvc4id0rtcu771&network=TRC20&symbol=USDT
      const baseUrl = "https://gateapi.anargate.com/api/v1/";
      const url = `${baseUrl}payment/get_asset_info_by_id?paymentUniqueId=${paymentUniqueId}&network=${network}&symbol=${symbol}`;
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      console.log("fetched address :", data.result?.address);
      setPaymentInformation((prev) => ({ ...prev, requestedAssets: [...prev.requestedAssets, data.result] }));
      setAddress(data.result?.address);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("error : ", error);
    }
  };

  useEffect(() => {
    if (asset) {
      console.log("asset : ", asset);
      const requiredAsset = paymentInformation?.requestedAssets?.find((_) => _?.symbol === asset?.symbol && _?.network === asset?.network);

      console.log("requiredAsset : ", requiredAsset);
      if (requiredAsset) {
        setAddress(requiredAsset?.address);
        console.log("address :", requiredAsset?.address);
        return;
      }
      getAssetAddressInfo(asset?.symbol, asset?.network);
    }
  }, [asset]);

  return (
    <CardContainer bordered={true}>
      <CardTopContainer>
        <h3>
          {asset?.symbol} {asset?.network} Address
        </h3>
        <SwapIcon />
      </CardTopContainer>
      <div>
        <CurrencyCardQrCode address={address} asset={asset} paymentInformation={paymentInformation} />
        <PriceContainer>
          <h1>{asset?.finalFee}</h1>
          <p>{asset?.symbol}</p>
        </PriceContainer>
        <p>
          send {asset?.finalFee} {asset?.symbol} (in ONE payment to :) <br />
          dont include transaction fee in this amount.
        </p>
        <CurrencyCardId
          address={address}
          requestAsset={requestAsset}
          paymentUniqueId={paymentUniqueId}
          paymentInformation={paymentInformation}
          asset={asset}
        />
        <BottomButton type="primary" icon={<SwapOutlined />} size={"large"}>
          Awaiting Payment From You
        </BottomButton>
      </div>
    </CardContainer>
  );
};
