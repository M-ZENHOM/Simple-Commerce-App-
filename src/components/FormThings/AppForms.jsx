import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { clear } from "../../rtk/slices/cart-slice";
import { OrderSummary } from "../checkout/OrderSummary";
import { CreditSchema, ValidateSchema } from "../Schema";
import { CustomInput } from "./CustomInput";
import ShippingInfo from "./ShippingInfo";

const MyForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const MyBtn = styled.button`
  outline: none;
  border: none;
  background-color: #3f51b5;
  color: #fff;
  margin-bottom: 10px;
  padding: 8px;
  transition: 0.5s;
  text-decoration: none;
  text-align: center;
  &:hover {
    transition: 0.5s;
    background-color: #000;
    color: #fff;
  }
`;
const ShippingContaienr = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 40px;
  @media (max-width: 640px) {
    margin-right: 10px;
  }
  h5 {
    position: relative;
    font-size: 18px;
    font-weight: normal;
    &::after {
      position: absolute;
      top: 0;
      left: -30px;
      content: "2";
      width: 25px;
      height: 25px;
      border-radius: 50%;
      text-align: center;
      line-height: 25px;
      background-color: #9e9e9e;
      color: #fff;
      @media (max-width: 640px) {
        top: -3px;
      }
    }
    &.active::after {
      background-color: #3f51b5;
    }
  }
`;
const ShopHeading = styled.h4`
  text-align: center;
  position: relative;
  font-size: 18px;
  font-weight: normal;
  @media (max-width: 640px) {
    font-size: 14px;
  }
  &::before {
    position: absolute;
    top: 15px;
    right: -200px;
    content: "";
    width: 180px;
    height: 1px;
    background-color: #9e9e9e;
    @media (max-width: 640px) {
      display: none;
    }
  }
  &::after {
    position: absolute;
    top: 0;
    left: -35px;
    content: "1";
    width: 25px;
    height: 25px;
    border-radius: 50%;
    text-align: center;
    line-height: 25px;
    background-color: #9e9e9e;
    color: #fff;
    @media (max-width: 640px) {
      top: -3px;
    }
  }
  &.active::after {
    background-color: #3f51b5;
  }
  &.done::after {
    background-color: #3f51b5;
    content: "✔";
  }
`;

const SmallContainer = styled.div`
  border-bottom: 1px solid #dcdfe6;
  margin: 10px 0;
`;
const Total = styled.h5`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #dcdfe6;
`;

const PaymentSucssBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  background-color: #2422225e;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  h2 {
    font-size: 16px;
    width: 600px;
    height: 200px;
    color: #000;
    background-color: #fff;
    text-align: center;
    line-height: 200px;
    border-radius: 20px;
  }
  @media (max-width: 640px) {
    & {
      min-height: 150vh;
      h2 {
        width: 300px;
        height: 150px;
        line-height: 150px;
      }
    }
  }
`;

export const AppForms = () => {
  const [userData, setUserData] = useState();
  const [activeStep, setActiveStep] = useState(true);
  const [paymentSuss, setaymentSuss] = useState(false);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
    setUserData(values);
    setActiveStep(false);
  };
  const onSubmitTwo = async (values, actions) => {
    actions.resetForm();
    setaymentSuss(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    navigate("/");
    dispatch(clear());
  };
  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);
  return (
    <>
      {paymentSuss && (
        <PaymentSucssBox>
          <h2>Thank you so much for your order! We really appreciate it.</h2>
        </PaymentSucssBox>
      )}
      <ShippingContaienr>
        <ShopHeading className={activeStep ? "active" : "done"}>
          Shipping address
        </ShopHeading>
        <h5 className={activeStep ? "done" : "active"}>Payment details</h5>
      </ShippingContaienr>
      {activeStep === true ? (
        <Formik
          initialValues={{
            fristName: "",
            lastName: "",
            city: "",
            address: "",
            email: "",
          }}
          validationSchema={ValidateSchema}
          onSubmit={onSubmit}
        >
          {(props) => (
            <MyForm>
              <CustomInput
                name="fristName"
                type="text"
                placeholder="Frist Name"
              />
              <CustomInput
                name="lastName"
                type="text"
                placeholder="Last Name"
              />
              <CustomInput
                name="email"
                type="text"
                placeholder="Enter your email"
              />
              <CustomInput
                name="address"
                type="text"
                placeholder="Address:3344 W Alameda Avenue, Lakewood, CO 80222"
              />
              <CustomInput name="city" type="text" placeholder="City" />
              <MyBtn type="submit">NEXT</MyBtn>
              <MyBtn onClick={() => navigate("/", { replace: true })}>
                BACK TO CART
              </MyBtn>
            </MyForm>
          )}
        </Formik>
      ) : (
        <>
          <SmallContainer>
            <OrderSummary data={cart} />
          </SmallContainer>
          <ShippingInfo data={userData} />
          <Total>
            Total: <span>{totalPrice}$</span>
          </Total>
          <Formik
            initialValues={{
              credit: "",
              date: "",
              cvc: "",
            }}
            validationSchema={CreditSchema}
            onSubmit={onSubmitTwo}
          >
            {(props) => (
              <MyForm>
                <CustomInput
                  name="credit"
                  type="text"
                  placeholder="Credit Card"
                />
                <CustomInput name="date" type="text" placeholder="Date" />
                <CustomInput name="cvc" type="number" placeholder="CVC" />
                <MyBtn type="submit">PAY</MyBtn>
                <MyBtn onClick={() => navigate("/", { replace: true })}>
                  BACK TO CART
                </MyBtn>
              </MyForm>
            )}
          </Formik>
        </>
      )}
    </>
  );
};
