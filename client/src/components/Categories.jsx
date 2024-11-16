import useFetch from "../hooks/useFetch";
import { useState, useEffect } from "react";
import CheckBox from "./CheckBox";
export default function Categories() {
  const { data, loading } = useFetch(`Categories?populate=*`);

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    data && setCategories(data);
  }, [data]);
  console.log(categories);

  return <CheckBox category={categories} />;
}
