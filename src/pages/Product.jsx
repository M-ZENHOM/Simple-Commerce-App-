import { Badge, Descriptions, Image, notification, Rate } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { RespContainer } from "../GlobalStyles";
import { addToCart } from "../rtk/slices/cart-slice";
import { fetchProductbyId } from "../rtk/slices/products-slice";

const Product = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.products.productDetails);
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.success({
      message: `Product added to cart`,
      placement,
    });
  };

  useEffect(() => {
    dispatch(fetchProductbyId(params.id));
  }, [dispatch]);

  return (
    <RespContainer>
      <Details>
        <Imgs>
          <Image
            width={500}
            height={530}
            src={productDetails?.thumbnail}
            style={{ objectFit: "cover", padding: "5px" }}
          />
          <Thumbnail>
            {productDetails.images?.map((img, index) => (
              <Image key={index} width={100} height={100} src={img} />
            ))}
          </Thumbnail>
        </Imgs>
        <NDescriptions bordered column={1}>
          <Descriptions.Item label="Name">
            {productDetails?.title}
          </Descriptions.Item>
          <Descriptions.Item label="Brand">
            {productDetails?.brand}
          </Descriptions.Item>
          <Descriptions.Item label="Category">
            {productDetails?.category}
          </Descriptions.Item>
          <Descriptions.Item label="Description">
            {productDetails?.description}
          </Descriptions.Item>
          <Descriptions.Item label="Status">
            <Badge status="success" style={{ marginRight: "10px" }} />
            Available {productDetails?.stock} In Stock
          </Descriptions.Item>
          <Descriptions.Item label="Rating">
            <Rate allowHalf defaultValue={productDetails.rating.toFixed(0)} />
          </Descriptions.Item>
          <Descriptions.Item label="Price">
            <del style={{ color: "red", marginRight: "10px" }}>
              {productDetails?.price}$
            </del>
            {(
              (productDetails.discountPercentage?.toFixed(0) *
                productDetails?.price) /
              100
            ).toFixed(0)}
            $
          </Descriptions.Item>
          <Descriptions.Item label="Cart">
            {contextHolder}
            <Btn
              onClick={() =>
                dispatch(addToCart(productDetails)) +
                openNotification("topLeft")
              }
            >
              Add to cart
            </Btn>
          </Descriptions.Item>
        </NDescriptions>
      </Details>
    </RespContainer>
  );
};

const Btn = styled.button`
  outline: none;
  border: none;
  padding: 10px 20px;
  background-color: #ffa500;
  color: white;
  border-radius: 10px;
  transition: 0.5s;
  &:hover {
    background-color: #b1760a;
  }
`;
const Details = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 1027px) {
    flex-direction: column;
  }
`;
const NDescriptions = styled(Descriptions)`
  table {
    height: 640px;
  }
`;
const Imgs = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1027px) {
    margin-bottom: 20px;
  }
`;
const Thumbnail = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Product;
