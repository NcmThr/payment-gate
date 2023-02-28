import React from "react";
import { TopTitleContainer, TopTextBody } from ".";

const Title = () => {
  return (
    <div>
      <h1>Pay Now</h1>
      <TopTitleContainer>
        <TopTextBody>
          <h4>ORDER :</h4>
          <p>#67</p>
        </TopTextBody>
        <TopTextBody>
          <h4>DATE :</h4>
          <p>January 4,2015</p>
        </TopTextBody>
        <TopTextBody>
          <h4>TOTAL :</h4>
          <p>...</p>
        </TopTextBody>
        <TopTextBody>
          <h4>PAYMENT METHOD :</h4>
          <p>...</p>
        </TopTextBody>
      </TopTitleContainer>
    </div>
  );
};

export default Title;
