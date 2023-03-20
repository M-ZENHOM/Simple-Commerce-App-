import { Button, message } from "antd";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { clear } from "../../rtk/slices/cart-slice";
import { OrderSummary } from "../OrderSummary";
import { CreditSchema } from "../Schema";
import { Btn } from "./AppForms";
import { CustomInput } from "./CustomInput";
import ShippingInfo from "./ShippingInfo";

const PaymentDetails = ({ current, setCurrent }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const onSubmitTwo = async (values, actions) => {
    actions.resetForm();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    navigate("/");
    dispatch(clear());
    setCurrent(current + 1);
    message.success("Purching complete!");
  };
  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);
  return (
    <>
      <SmallContainer>
        <OrderSummary data={cart} />
      </SmallContainer>
      <ShippingInfo />
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
            <CustomInput name="credit" type="text" placeholder="Credit Card" />
            <CustomInput name="date" type="text" placeholder="Date" />
            <CustomInput name="cvc" type="number" placeholder="CVC" />

            <Btn type="primary">Done</Btn>
          </MyForm>
        )}
      </Formik>
    </>
  );
};
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
const MyForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export default PaymentDetails;
