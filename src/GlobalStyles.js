import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*, *::before, *::after{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html{
    scroll-behavior: smooth;
}
body{
    font-family: 'Ubuntu', sans-serif;
}
a{
    text-decoration:none;
}
`;

export const RespContainer = styled.div`
  width: 1400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  overflow: hidden;
  transition: 0.5s;
  padding: 0 8px;
  @media (max-width: 1400px) {
    width: 1200px;
  }
  @media (max-width: 1200px) {
    width: 1000px;
  }
  @media (max-width: 1000px) {
    width: 767px;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;
