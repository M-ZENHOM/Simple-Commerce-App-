import { Button, Drawer, Radio } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchCategory, fetchProducts } from "../rtk/slices/products-slice";
const Filteration = ({ categories }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const onChange = (cat) => {
    dispatch(fetchCategory(cat));
    setOpen(false);
  };

  return (
    <>
      <Btn onClick={() => setOpen(true)}>Filter ur products</Btn>
      <Drawer
        title="Filter your products as u like!"
        placement="left"
        onClose={() => setOpen(false)}
        open={open}
      >
        <Group>
          <Radio onChange={() => dispatch(fetchProducts()) + setOpen(false)}>
            all products
          </Radio>
          {categories?.map((cat, index) => (
            <Radio onChange={() => onChange(cat)} value={cat} key={index}>
              {cat}
            </Radio>
          ))}
        </Group>
      </Drawer>
    </>
  );
};

const Btn = styled.button`
  margin-top: 80px;
  margin-bottom: 30px;
  outline: none;
  border: none;
  background-color: #003d29;
  color: white;
  padding: 10px 15px;
  border-radius: 10px;
  transition: 0.5s;
  &:hover {
    background-color: #06704d;
  }
`;
const Group = styled(Radio.Group)`
  display: flex;
  flex-direction: column;
`;

export default Filteration;
