import { useContext } from "react";
import { StoreContext } from "../hooks/StoreContext";
import "../styles/filter.css";
export default function CheckBox({ category }) {
  const { filters, setFilters } = useContext(StoreContext);
  const handleFilterCategory = (e) => {
    setFilters(e.target.value.dataset.category);
    console.log(e.target.value);
  };
  return (
    <div className="wrapper">
      <label className="checkbox-inline">
        <input
          onChange={handleFilterCategory}
          type="checkbox"
          data-category={category.id}
          data-toggle="toggle"
        />{" "}
        First
      </label>
      {/* <div className="badge">{props.category.attributes.title}</div>{" "} */}
    </div>
  );
}
