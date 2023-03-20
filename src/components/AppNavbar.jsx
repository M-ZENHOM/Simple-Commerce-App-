import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { ShoppingOutlined, UserOutlined } from "@ant-design/icons";
import { RespContainer } from "../GlobalStyles";
import { Badge } from "antd";

export const AppNavbar = ({ isScroll }) => {
  const cart = useSelector((state) => state.cart);
  return (
    <NavBar className={`${isScroll && "scrolled"}`}>
      <RespContainer>
        <NavContainer>
          <NavLinks>
            <Logo>Ecommerce</Logo>
            <NavBarLink to="/">Home</NavBarLink>
          </NavLinks>
          <Icons>
            <Badge count={cart.length}>
              <Link to="cart">
                <ShoppingOutlined
                  style={{ color: "#000", fontSize: "20px", cursor: "pointer" }}
                />
              </Link>
            </Badge>
            <UserOutlined
              style={{ color: "#000", fontSize: "20px", cursor: "pointer" }}
            />
          </Icons>
        </NavContainer>
      </RespContainer>
    </NavBar>
  );
};

const NavBar = styled.nav`
  width: 100%;
  height: 6vh;
  z-index: 10;
  background-color: white;
  &.scrolled {
    position: fixed;
    top: 0;
  }
`;
const NavContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;
const NavLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: #000;
`;
const NavBarLink = styled(NavLink)`
  color: #000;
  margin-left: 10px;
`;
const Icons = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 24px;
  text-decoration: none;
  margin-right: 20px;
  color: #000;
`;
