import { Alert } from "antd";
import { useField } from "formik";
import styled from "styled-components";

const MyInput = styled.input`
  width: auto;
  border: none;
  border-bottom: 1px solid #3f51b5;
  outline: none;
  padding: 10px;
  margin-bottom: 20px;
  &.input-error {
    border-color: red;
  }
`;

export const CustomInput = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <MyInput
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error && (
        <Alert message={meta.error} type="error" showIcon />
      )}
    </>
  );
};
