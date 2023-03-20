import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CartBody } from "../components/CartBody";
import { RespContainer } from "../GlobalStyles";

const Heading = styled.h1`
  padding-top: 100px;
  margin-bottom: 10px;
`;
const Btn = styled(Link)`
  padding: 10px 15px;
  background-color: #003d29;
  color: white;
  transition: 0.5s;
  &:hover {
    background-color: #037c54;
  }
`;

export const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <RespContainer>
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
          <Btn to="/">Continue shopping</Btn>
          <CartBody cart={cart} />
        </>
      )}
    </RespContainer>
  );
};
