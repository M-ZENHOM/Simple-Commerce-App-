import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addToCart } from "../rtk/slices/cart-slice";
import { fetchProducts } from "../rtk/slices/products-slice";
import { MdAddShoppingCart } from "react-icons/md";

const ProductsCard = styled(Card)`
  width: 360px;
  height: 400px;
  margin: 5px;
  img {
    height: 200px;
  }
  p {
    height: 80px;
  }
  &:hover {
    button {
      transition: 0.5s;
      transform: scale(1.5);
    }
  }
`;
const CartBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  outline: none;
  border: none;
  font-size: 30px;
  color: #000;
`;

export const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Container className="py-5">
      <Row className="py-5">
        {products.map((product) => (
          <Col key={product.id}>
            <ProductsCard>
              <ProductsCard.Img variant="top" src={product.thumbnail} />
              <ProductsCard.Body>
                <ProductsCard.Title>{product.title}</ProductsCard.Title>
                <ProductsCard.Text>{product.description}</ProductsCard.Text>
                <CartBtn onClick={() => dispatch(addToCart(product))}>
                  <MdAddShoppingCart />
                </CartBtn>
              </ProductsCard.Body>
            </ProductsCard>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
