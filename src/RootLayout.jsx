import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { AppNavbar } from "./components/AppNavbar";
import GlobalStyles from "./GlobalStyles";
import SmallNav from "./components/SmallNav";

const RootLayout = () => {
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    const ScrollHandler = () => {
      window.scrollY === 0 && setIsScroll(false);
      window.scrollY !== 0 && setIsScroll(true);
    };
    window.addEventListener("scroll", ScrollHandler);
    return () => window.addEventListener("scroll", ScrollHandler);
  }, []);

  return (
    <>
      <SmallNav />
      <AppNavbar isScroll={isScroll} />
      <GlobalStyles />
      <Outlet />
    </>
  );
};

export default RootLayout;
