import styled from "styled-components";

const SmallContainer = styled.div`
  border-bottom: 1px solid #dcdfe6;
  margin: 10px 0;
`;

const Info = styled.h5`
  display: flex;
  justify-content: baseline;
  align-items: center;
  padding: 4px 0;
  span {
    font-size: 18px;
    font-weight: normal;
    margin-left: 10px;
    margin-top: 4px;
  }
`;

const ShippingInfo = ({ data }) => {
  return (
    <SmallContainer>
      <h4>Shipping Info</h4>
      <Info>
        Your name: <span>{data.fristName + " " + data.lastName}</span>
      </Info>
      <Info>
        City: <span>{data.city}</span>
      </Info>
      <Info>
        ShippingAddress: <span>{data.address}</span>
      </Info>
    </SmallContainer>
  );
};

export default ShippingInfo;
