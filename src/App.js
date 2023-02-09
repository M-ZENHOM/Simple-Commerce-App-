import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { AppNavbar } from "./components/AppNavbar";
import { Cart } from "./components/Cart/Cart";
import CheckOut from "./components/checkout/CheckOut";
import { Products } from "./components/Products";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<CheckOut />}></Route>
      </Routes>
    </div>
  );
}

export default App;
