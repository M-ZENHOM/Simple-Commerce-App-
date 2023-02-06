import React from "react";
import styled from "styled-components";

const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-top: 20px;
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;
const TitleCon = styled.h5`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: normal;
`;

export const OrderSummary = ({ data }) => {
  return (
    <>
      <h4>Order summary</h4>
      {data.map((product) => (
        <OrderContainer key={product.id}>
          <TitleContainer>
            <TitleCon>
              {product.title} <span>{product.price}$</span>
            </TitleCon>
            <span>Quantity: {product.quantity}</span>
          </TitleContainer>
        </OrderContainer>
      ))}
    </>
  );
};
