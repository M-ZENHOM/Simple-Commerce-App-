import { Button } from "antd";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getUserData } from "../../rtk/slices/userSlice";
import { ValidateSchema } from "../Schema";
import { CustomInput } from "./CustomInput";

export const AppForms = ({ current, setCurrent }) => {
  const dispatch = useDispatch();
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    dispatch(
      getUserData({
        fristName: values.fristName,
        lastName: values.lastName,
        city: values.city,
        address: values.address,
        email: values.email,
      })
    );
    setCurrent(current + 1);
  };

  return (
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
          <CustomInput name="fristName" type="text" placeholder="Frist Name" />
          <CustomInput name="lastName" type="text" placeholder="Last Name" />
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
          <Btn type="submit">Next</Btn>
        </MyForm>
      )}
    </Formik>
  );
};

const MyForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;
export const Btn = styled.button`
  outline: none;
  border: none;
  padding: 10px;
  background-color: #1677ff;
  color: white;
  transition: 0.5s;
  &:hover {
    background-color: #0b489e;
  }
`;
