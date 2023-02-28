import React from "react";
import { CryptoContainer, CryptoBody, CurrencyLogoImage } from ".";
import { connect } from "react-redux";
import { changeType } from "../../redux/page/page.action";

const CurrencyButton = ({ asset, setAsset, paymentInformation }) => {
  return (
    <>
      <h4>Select Payment Method </h4>
      <CryptoContainer>
        {paymentInformation?.availableAssets?.map((assetInfo, index) => {
          return (
            <React.Fragment key={index}>
              <CryptoBody isActive={assetInfo?.symbol === asset?.symbol && assetInfo?.network === asset?.network} onClick={() => setAsset(assetInfo)}>
                <CurrencyLogoImage src={`https://gateapi.anargate.com/${assetInfo?.logo?.large}`} />
                <p>{assetInfo?.symbol}</p>
                <p>{assetInfo?.network}</p>
              </CryptoBody>
            </React.Fragment>
          );
        })}
      </CryptoContainer>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeType: (e) => dispatch(changeType(e)),
  };
};

export default connect(null, mapDispatchToProps)(CurrencyButton);
