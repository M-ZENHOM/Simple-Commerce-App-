import { useSelector } from "react-redux";
import styled from "styled-components";

const Title = styled.h2`
  margin-top: 100px;
  text-align: center;
`;

const withGuard = (Component) => {
  const Wrapper = (props) => {
    const cart = useSelector((state) => state.cart);
    return cart.length > 0 ? (
      <Component />
    ) : (
      <Title>Please add any product to ur cart!</Title>
    );
  };
  return Wrapper;
};

export default withGuard;
