import styled from "styled-components";

export const TopTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 35px;
`;

export const TopTextBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h4 {
    font-size: small;
  }
  p {
    margin-top: -10px;
  }
`;
