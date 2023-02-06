import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Image, Table } from "react-bootstrap";
import styled from "styled-components";
import {
  clear,
  DecreaseQuantity,
  deleteFromCart,
  IncreaseQuantity,
} from "../../rtk/slices/cart-slice";
import { Link } from "react-router-dom";

const HeadContaienr = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const BtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const ProductButton = styled.button`
  font-size: 20px;
  background: none;
  outline: none;
  border: none;
`;
const DetailsTable = styled(Table)`
  img {
    width: 150px;
    height: 100px;
  }
  @media (max-width: 640px) {
    img {
      width: 80px;
      height: 80px;
    }
  }
  td {
    text-align: center;
    line-height: 109px;
  }
`;
const CheckOutBtn = styled(Link)`
  background-color: #ffae00;
  color: #fff;
  padding: 8px;
  border-radius: 6px;
  text-decoration: none;
`;
export const CartBody = (cart) => {
  const dispatch = useDispatch();
  const totalPrice = cart.cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);
  return (
    <>
      <HeadContaienr>
        <h5>Subtotal :{totalPrice.toFixed()}$</h5>
        <BtnContainer>
          <Button variant="primary my-2 mx-2" onClick={() => dispatch(clear())}>
            Clear All
          </Button>
          <CheckOutBtn to="/checkout">Check out!</CheckOutBtn>
        </BtnContainer>
      </HeadContaienr>
      <DetailsTable striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Title</th>
            <th>Img</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.cart.map((product) => (
            <tr key={product.id}>
              <td>{product.title.slice(0, 8)}</td>
              <td>
                <Image src={product.thumbnail} alt={product.title} />
              </td>
              <td>{product.price}$</td>
              <td>
                <ProductButton
                  onClick={() => {
                    dispatch(DecreaseQuantity({ id: product.id }));
                  }}
                >
                  -
                </ProductButton>
                {product.quantity}
                <ProductButton
                  onClick={() => {
                    dispatch(IncreaseQuantity({ id: product.id }));
                  }}
                >
                  +
                </ProductButton>
              </td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => dispatch(deleteFromCart(product))}
                >
                  REMOVE
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </DetailsTable>
    </>
  );
};
