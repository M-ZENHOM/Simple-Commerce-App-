import styled from "styled-components";
import { AppForms } from "../components/FormThings/AppForms";
import withGuard from "../components/util/withGuard";
import { Steps, theme } from "antd";
import { useState } from "react";
import PaymentDetails from "../components/FormThings/PaymentDetails";

const Container = styled.div`
  padding: 10px;
  width: 600px;
  height: fit-content;
  margin: 0 auto;
  margin-top: 100px;
  background-color: #f8f9fa;
  border-radius: 10px;
  @media (max-width: 640px) {
    width: 350px;
  }
`;
const steps = [
  {
    title: "Shipping address",
  },
  {
    title: "Payment Details",
  },
];

const CheckOut = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };
  return (
    <Container>
      <Steps current={current} items={items} />
      <div style={contentStyle}>
        {current === 0 && (
          <AppForms current={current} setCurrent={setCurrent} />
        )}
        {current === 1 && (
          <PaymentDetails current={current} setCurrent={setCurrent} />
        )}
      </div>
    </Container>
  );
};

export default withGuard(CheckOut);
