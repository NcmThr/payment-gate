import React, { useEffect, useState, useContext } from "react";
import "./../../App.css";
import axios from "axios";
import { useResolvedPath } from "react-router-dom";
import { connect } from "react-redux";
import CurrencyButton from "../component/currency.button/currency.button";
import CardBox from "./../component/card.box/card.box";
import { LoaderContext } from "../provider/loader.provider";

const HomePage = () => {
  const [asset, setAsset] = useState(null);
  const [paymentUniqueId, setPaymentUniqueId] = useState();

  // const [pathname] = useResolvedPath();
  // console.log(useResolvedPath(window.location).pathname?.substring(1));

  // const findPaymentUniqueId = () => {
  //   const pathName = window.location.pathname?.substring(1);
  //   // localStorage.setItem("paymentUniqueId", JSON.stringify(pathName));
  // };

  // console.log(paymentUniqueId);

  // ---------------------------------
  // useEffect(() => {
  // const paymentUniqueId = window.location?.pathname?.substring(1);
  // console.log(paymentUniqueId);

  // console.log(querybject);
  //   return () => {};
  // }, []);
  // -------------------------------------

  const [paymentInformation, setPaymentInformation] = useState();
  const { setIsLoading } = useContext(LoaderContext);

  const [requestAsset, setRequestAsset] = useState({});

  const axiosPaymentInfo = async () => {
    try {
      // const cachedResult = JSON.parse(localStorage.getItem(url));
      // let response;
      // if (cachedResult) {
      //   response = cachedResult;
      // } else {
      //   response = await axios(url);
      //   localStorage.setItem(url, JSON.stringify(response));
      // }
      const paymentUniqueId = window.location.pathname?.substring(1);
      setPaymentUniqueId(paymentUniqueId);
      console.log("paymentUniqueId : ", paymentUniqueId);
      const url = `https://gateapi.anargate.com/api/v1/payment/get_info_by_id?paymentUniqueId=${paymentUniqueId}`;
      const response = await axios.get(url);
      // localStorage.setItem(url, JSON.stringify(response));
      console.log(response.data);
      setPaymentInformation(response.data?.result?.paymentInfo);
    } catch (error) {
      console.log(error?.message);
    }
  };

  const fetchPaymentInfo = async () => {
    try {
      setIsLoading(true);
      const url = `https://gateapi.anargate.com/api/v1/payment/get_info_by_id?paymentUniqueId=${paymentUniqueId}`;

      const response = await fetch(url);
      const data = await response.json();

      setPaymentInformation(data.result?.paymentInfo);
      // setRequestAsset(data.result?.paymentInfo?.availableAssets);
      setIsLoading(false);
    } catch (error) {
      console.log(error?.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // fetchPaymentInfo();
    axiosPaymentInfo();
    setRequestAsset(requestAsset);
  }, []);

  return (
    <div>
      <CurrencyButton asset={asset} setAsset={setAsset} paymentInformation={paymentInformation} />

      <CardBox
        setPaymentInformation={setPaymentInformation}
        paymentUniqueId={paymentUniqueId}
        asset={asset}
        paymentInformation={paymentInformation}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.name,
    price: state.price,
    id: state.id,
    data: state.data,
  };
};

export default connect(mapStateToProps)(HomePage);
