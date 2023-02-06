import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CartBody } from "./CartBody";

const Heading = styled.h1`
  padding-top: 100px;
  margin-bottom: 10px;
`;

export const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <Container>
      {cart.length === 0 ? (
        <>
          <Heading>Your Shopping Cart</Heading>
          <p>
            You have no items in your shopping cart,
            <Link to="/">start adding some!</Link>
          </p>
        </>
      ) : (
        <>
          <Heading>Your Shopping Cart </Heading>
          <CartBody cart={cart} />
        </>
      )}
    </Container>
  );
};
