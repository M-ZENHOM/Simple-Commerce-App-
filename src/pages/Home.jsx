import styled from "styled-components";
import bgImg from "../assets/images/BG.jpg";
import { Products } from "../components/Products";
import { RespContainer } from "../GlobalStyles";

const Home = () => {
  return (
    <RespContainer>
      <Img>
        <Intro>
          <Title>Grab up to 50% Off On Selected Headphone</Title>
          <Btn>Buy Now</Btn>
        </Intro>
      </Img>
      <Products />
    </RespContainer>
  );
};

const Img = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  background-image: url(${bgImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 100%;
`;
const Intro = styled.div`
  position: absolute;
  left: 50px;
  top: 50%;
  transform: translateY(-50%);
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00000058;
  }
`;
const Title = styled.h2`
  width: 350px;
  color: #003d29;
`;
const Btn = styled.button`
  outline: none;
  border: none;
  background-color: #003d29;
  color: white;
  border-radius: 20px;
  padding: 7px 15px;
`;

export default Home;
