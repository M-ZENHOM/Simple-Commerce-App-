import React, { useState } from "react";
import styled from "styled-components";
import { AppForms } from "../FormThings/AppForms";
import withGuard from "../util/withGuard";

const Container = styled.div`
  padding: 10px;
  width: 600px;
  height: fit-content;
  margin: 0 auto;
  margin-top: 100px;
  background-color: #f8f9fa;
  border-radius: 10px;
  @media (max-width: 640px) {
    width: 350px;
  }
`;
const Heading = styled.h2`
  text-align: center;
  text-transform: uppercase;
  margin-top: 30px;
`;
const CheckOut = () => {
  return (
    <Container>
      <Heading>Checkout</Heading>
      <AppForms />
    </Container>
  );
};

export default withGuard(CheckOut);
