import { BITCOIN_TYPE, BITCOIN_CASH_TYPE, BITCOIN_SV_TYPE, LITECOIN_TYPE, DASH_TYPE } from "./page.type";
import styled from "styled-components";

const ProductText = styled.h4`
  margin: 0px;
`;

const initioalState = {
  name: "Bitcoin",
  price: "0.00367821",
  id: "1ACP4KPDNXFNtsdXd5ZRGRUjMSAbnECA",
  data: [
    {
      key: "1",
      product: <ProductText>T-shirt x 1</ProductText>,
      title: "25.00 $",
    },
    {
      key: "2",
      product: <ProductText>Cart Subtotal :</ProductText>,
      title: "25.00 $",
    },
    {
      key: "3",
      product: <ProductText>Shipping :</ProductText>,
      title: "Free Shipping",
    },
    {
      key: "4",
      product: <ProductText>Payment Method</ProductText>,
      title: "Bitcoin/Altcoin",
    },
    {
      key: "5",
      product: <ProductText>Order Total</ProductText>,
      title: "25.00 $",
    },
  ],
};

const cardReducer = (state = initioalState, action) => {
  switch (action.type) {
    case BITCOIN_TYPE:
      return {
        name: "Bitcoin",
        price: "0.00367821",
        id: "1ACP4KPDNXFNtsdXd5ZRGRUjMSAbnECA",
        data: state.data,
      };
    case BITCOIN_CASH_TYPE:
      return {
        ...state,
        name: "BitcoinCash",
        price: "0.54568843",
        id: "23DGVJKIUG653actyhvfDFRTG45T6KJBDSA",
        data: [
          {
            key: "1",
            product: <ProductText>X Box</ProductText>,
            title: "40.00 $",
          },
          {
            key: "1",
            product: <ProductText>Hedset</ProductText>,
            title: "30.00 $",
          },
          {
            key: "1",
            product: <ProductText>Air Jordan</ProductText>,
            title: "43.70 $",
          },
          {
            key: "2",
            product: <ProductText>Cart Subtotal :</ProductText>,
            title: "113.70 $",
          },
          {
            key: "3",
            product: <ProductText>Shipping :</ProductText>,
            title: "Free Shipping",
          },
          {
            key: "4",
            product: <ProductText>Payment Method</ProductText>,
            title: "Bitcoin Cash",
          },
          {
            key: "5",
            product: <ProductText>Order Total</ProductText>,
            title: "113.70 $",
          },
        ],
      };
    case BITCOIN_SV_TYPE:
      return {
        ...state,
        name: "Bitcoin SV",
        price: "0.923678",
        id: "SDFV3445LKMJFSsfiSNKGTaw68ojngGYSV753",
        data: [
          {
            key: "1",
            product: <ProductText>Bag x 2</ProductText>,
            title: "60.00 $",
          },
          {
            key: "1",
            product: <ProductText>T-shirt x </ProductText>,
            title: "25.00 $",
          },
          {
            key: "2",
            product: <ProductText>Cart Subtotal :</ProductText>,
            title: "85.00 $",
          },
          {
            key: "3",
            product: <ProductText>Shipping :</ProductText>,
            title: "Free Shipping",
          },
          {
            key: "4",
            product: <ProductText>Payment Method</ProductText>,
            title: "Bitcoin SV",
          },
          {
            key: "5",
            product: <ProductText>Order Total</ProductText>,
            title: "85.00 $",
          },
        ],
      };
    case LITECOIN_TYPE:
      return {
        ...state,
        name: "LiteCoin",
        price: "0.0542896",
        id: "1ACP4KPDNXFNtsdXd5ZRGRUjMSAbnECA",
        data: [
          {
            key: "1",
            product: <ProductText>MacBook Air</ProductText>,
            title: "73.00 $",
          },
          {
            key: "2",
            product: <ProductText>Cart Subtotal :</ProductText>,
            title: "73.00 $",
          },
          {
            key: "3",
            product: <ProductText>Shipping :</ProductText>,
            title: "Free Shipping",
          },
          {
            key: "4",
            product: <ProductText>Payment Method</ProductText>,
            title: "Litecoin",
          },
          {
            key: "5",
            product: <ProductText>Order Total</ProductText>,
            title: "73.00 $",
          },
        ],
      };
    case DASH_TYPE:
      return {
        ...state,
        name: "Dash",
        price: "0.000543",
        id: "S445JHNBFDG4KPDNXXd5ZRGRUjMSAbnECA",
        data: [
          {
            key: "1",
            product: <ProductText>Phone x 1</ProductText>,
            title: "37.00 $",
          },
          {
            key: "2",
            product: <ProductText>Cart Subtotal :</ProductText>,
            title: "37.00 $",
          },
          {
            key: "3",
            product: <ProductText>Shipping :</ProductText>,
            title: "Free Shipping",
          },
          {
            key: "4",
            product: <ProductText>Payment Method</ProductText>,
            title: "Dash",
          },
          {
            key: "5",
            product: <ProductText>Order Total</ProductText>,
            title: "37.00 $",
          },
        ],
      };
    default:
      return state;
  }
};

export default cardReducer;
