import styled, { css } from "styled-components";

export const CryptoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
`;

export const CryptoBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 10px 0px;
  padding: 8px 10px 0px;

  background: ${({ isActive }) => (isActive ? "#dedede" : "")};
  border-radius: 8px;
  cursor: pointer;
  :hover {
    background: #dedede;
    padding: 8px 10px 0px;
    border-radius: 8px;
  }
  img {
    width: 60px;
  }
  p {
    margin-top: 3px;
    font-size: smaller;
    font-weight: 500;
  }
`;

export const CurrencyLogoImage = styled.img`
  border-radius: 50px;
`;
