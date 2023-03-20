import { PhoneOutlined } from "@ant-design/icons";
import styled from "styled-components";

const SmallNav = () => {
  return (
    <SNav>
      <Number>
        <PhoneOutlined style={{ padding: "10px" }} />
        123456789
      </Number>
      <p>Get 50% off on selected Items | Shop Now</p>
    </SNav>
  );
};

const SNav = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 4vh;
  background-color: #003d29;
  overflow: hidden;
  color: white;
  @media (max-width: 767px) {
    font-size: 10px;
  }
`;
const Number = styled.p`
  display: flex;
  align-items: center;
`;

export default SmallNav;
