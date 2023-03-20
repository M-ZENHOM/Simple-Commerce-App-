import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterDiv>
      <p>Copyright © 2023. All rights reserved.</p>
      <p>Designed & Developed by Zenhom</p>
    </FooterDiv>
  );
};
const FooterDiv = styled.footer`
  width: 100%;
  height: 6vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #003d29;
  color: #fff;
  font-size: 16px;
  @media (max-width: 767px) {
    flex-direction: column;
    height: fit-content;
    padding: 10px;
    font-size: 14px;
    p {
      margin-bottom: 3px;
    }
  }
`;

export default Footer;
