import React from "react";
import styled from "styled-components";
import Bg from "../assets/images/newsletter-bg.jpeg";

const Newsletter = () => {
  return (
    <News>
      <Sub>
        <h2>Subscribe to get all news</h2>
        <input type="text" />
        <button>Subscribe</button>
      </Sub>
    </News>
  );
};
const News = styled.div`
  width: 100%;
  height: 30vh;
  background-image: url(${Bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 100%;
`;
const Sub = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    text-transform: uppercase;
  }
  input {
    width: 400px;
    padding: 10px;
    outline: none;
    border: none;
    border-radius: 6px;
    margin: 15px 0;
    box-shadow: 1px 1px 1px 1px #33471a;
    @media (max-width: 767px) {
      width: 300px;
    }
  }
  button {
    padding: 10px;
    width: 300px;
    outline: none;
    border: none;
    background-color: #33471a;
    color: white;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      background-color: #507028;
    }
  }
`;
export default Newsletter;
