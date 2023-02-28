import React from "react";
import { CurrencyCard } from "../currency.card/currency.card";
import EmptyCard from "../_empty.card/empty.card";

const CardBox = ({ asset, paymentInformation, paymentUniqueId, setPaymentInformation }) => {
  return (
    <>
      {asset === null ? (
        <EmptyCard />
      ) : (
        <CurrencyCard
          setPaymentInformation={setPaymentInformation}
          paymentUniqueId={paymentUniqueId}
          paymentInformation={paymentInformation}
          asset={asset}
        />
      )}
    </>
  );
};

export default CardBox;
