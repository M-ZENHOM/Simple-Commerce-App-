import { useDispatch } from "react-redux";
import { Button, Descriptions, Image } from "antd";

import styled from "styled-components";
import {
  clear,
  DecreaseQuantity,
  deleteFromCart,
  IncreaseQuantity,
} from "../rtk/slices/cart-slice";
import { Link } from "react-router-dom";
import { RespContainer } from "../GlobalStyles";

const HeadContaienr = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
const BtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const ProductButton = styled.button`
  font-size: 24px;
  background: none;
  outline: none;
  border: none;
  padding: 10px;
`;

const CheckOutBtn = styled(Link)`
  background-color: #ffae00;
  color: #fff;
  padding: 8px;
  border-radius: 6px;
  text-decoration: none;
`;
const Quantity = styled.span`
  padding: 6px 10px;
  border: 1px solid black;
  text-align: center;
`;
const NDescriptions = styled(Descriptions)`
  width: 100%;
  margin: 20px 0;
`;

export const CartBody = (cart) => {
  const dispatch = useDispatch();
  const totalPrice = cart.cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);
  return (
    <RespContainer>
      <HeadContaienr>
        <h5 style={{ fontSize: "18px" }}>Subtotal :{totalPrice.toFixed()}$</h5>
        <BtnContainer>
          <Button
            style={{ marginRight: "10px" }}
            type="primary"
            onClick={() => dispatch(clear())}
          >
            Clear All
          </Button>
          <CheckOutBtn to="/checkout">Check out!</CheckOutBtn>
        </BtnContainer>
      </HeadContaienr>
      {cart.cart.map((product) => (
        <NDescriptions bordered width={1000} column={1} key={product.id}>
          <Descriptions.Item label="Product">{product.title}</Descriptions.Item>
          <Descriptions.Item label="Image">
            <Image width={150} src={product.thumbnail} alt={product.title} />
          </Descriptions.Item>
          <Descriptions.Item label="Price">{product.price}$</Descriptions.Item>
          <Descriptions.Item label="Amount">
            <ProductButton
              onClick={() => {
                dispatch(DecreaseQuantity({ id: product.id }));
              }}
            >
              -
            </ProductButton>
            <Quantity> {product.quantity}</Quantity>
            <ProductButton
              onClick={() => {
                dispatch(IncreaseQuantity({ id: product.id }));
              }}
            >
              +
            </ProductButton>
          </Descriptions.Item>
          <Descriptions.Item label="Remove from cart">
            <Button
              variant="danger"
              onClick={() => dispatch(deleteFromCart(product))}
            >
              REMOVE
            </Button>
          </Descriptions.Item>
        </NDescriptions>
      ))}
    </RespContainer>
  );
};
