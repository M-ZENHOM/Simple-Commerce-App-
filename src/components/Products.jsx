import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addToCart } from "../rtk/slices/cart-slice";
import { fetchCategories, fetchProducts } from "../rtk/slices/products-slice";
import { ShoppingCartOutlined, SearchOutlined } from "@ant-design/icons";
import { Card, Skeleton } from "antd";
import Filteration from "./Filteration";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;

export const Products = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const products = useSelector((state) => state.products.products);
  const { categories } = useSelector((state) => state.products);
  const navigate = useNavigate();

  const DetailsHandler = (id) => {
    navigate(`/product/${id}`);
    window.scroll(0, 0);
  };
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
    setInterval(() => {
      setLoading(false);
    }, 1000);
  }, [dispatch]);

  return (
    <>
      <Filteration categories={categories} />
      <Title>Products For You!</Title>
      <GridSysyem>
        {products?.map((product) => (
          <Skeleton loading={loading} active avatar key={product.id}>
            <Card
              style={{
                width: 335,
                margin: "0 auto",
              }}
              cover={
                <img
                  style={{
                    height: 200,
                  }}
                  alt="thumbnail"
                  src={product.thumbnail}
                />
              }
              actions={[
                <ShoppingCartOutlined
                  style={{ fontSize: "24px" }}
                  onClick={() => dispatch(addToCart(product))}
                />,
                <SearchOutlined
                  style={{ fontSize: "24px" }}
                  onClick={() => DetailsHandler(product.id)}
                />,
              ]}
            >
              <Meta title={product.title} description={product.description} />
            </Card>
          </Skeleton>
        ))}
      </GridSysyem>
    </>
  );
};

const GridSysyem = styled.div`
  width: 100%;
  padding: 20px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  margin: 0 auto;
  gap: 10px;
`;
const Title = styled.h2`
  display: flex;
  width: 100%;
`;
