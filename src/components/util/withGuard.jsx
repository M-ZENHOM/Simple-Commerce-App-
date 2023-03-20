import { Button } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h2`
  margin-top: 100px;
  text-align: center;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const withGuard = (Component) => {
  const Wrapper = (props) => {
    const cart = useSelector((state) => state.cart);
    return cart.length > 0 ? (
      <Component />
    ) : (
      <Div>
        <Title>Please add any product to ur cart!</Title>
        <Link to="/" style={{ fontSize: "20px", marginTop: "10px" }}>
          Go to Shop
        </Link>
      </Div>
    );
  };
  return Wrapper;
};

export default withGuard;
