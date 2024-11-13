import "./App.css";
import { useState, useEffect } from "react";
import useFetch from "./hooks/useFetch";

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const { data, loading, error } = useFetch(`products`);

  return (
    <>
      <h1>HELLO STRAPI with vite</h1>
    </>
  );
}

export default App;
