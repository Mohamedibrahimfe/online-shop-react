import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import NoPage from "./pages/NoPage";
import Cart from "./pages/Cart";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import StoreContext from "./hooks/StoreContext";
export default function App() {
  const [filters, setFilters] = useState({});
  return (
    <StoreContext.Provider value={{ filters, setFilters }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StoreContext.Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
