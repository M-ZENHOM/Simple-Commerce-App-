import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { FcShop } from "react-icons/fc";
import styled from "styled-components";

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  svg {
    margin-right: 10px;
    font-size: 30px;
  }
`;
const CartIcon = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 25px;
  p {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    font-size: 18px;
    background-color: #ffc107;
    color: #000;
    text-align: center;
    line-height: 25px;
    margin-left: -5px;
  }
`;

export const AppNavbar = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <Navbar fixed="top" bg="dark" expand="lg" variant="dark">
      <Container>
        <Logo className="navbar-brand" to="/">
          <FcShop />
          Commerce App
        </Logo>
        <CartIcon className="nav-link" to="/cart">
          <MdShoppingCart color="#fff" />
          <p>{cart.length === 0 ? "0" : cart.length}</p>
        </CartIcon>
      </Container>
    </Navbar>
  );
};
