import { useContext, useEffect } from "react";
import { StoreContext } from "../hooks/StoreContext";
import "../styles/filter.css";
import qs from "qs";
export default function CheckBox({ category }) {
  const { setFilters, selectedCategory, setSelectedCategory } =
    useContext(StoreContext);

  useEffect(() => {
    if (!selectedCategory || selectedCategory.length === 0) {
      // Fetch all products if no category is selected
      setFilters(`${import.meta.env.VITE_API_URL}/api/products?populate=*`);
      return;
    }

    // Construct the query dynamically
    const query = qs.stringify(
      {
        filters: {
          categories: {
            title: {
              $in: selectedCategory, // Use the selectedCategory array for filtering by title
            },
          },
        },
      },
      {
        encodeValuesOnly: true, // Ensures clean URL encoding
        arrayFormat: "repeat", // Outputs multiple $in parameters as required
      }
    );

    // Set the final query URL
    setFilters(
      `${import.meta.env.VITE_API_URL}/api/products?populate=*&${query}`
    );
  }, [selectedCategory]);

  const handleFilterCategory = (e) => {
    const value = e.target.dataset.category; // Use the category title (e.g., "men")
    const checked = e.target.checked;

    setSelectedCategory(
      checked
        ? [...selectedCategory, value] // Add title if checked
        : selectedCategory.filter((c) => c !== value) // Remove title if unchecked
    );
  };

  return (
    <div className="wrapper">
      {category.map((item) => (
        <div key={item.id} className="form-check form-switch">
          <input
            onClick={handleFilterCategory}
            data-category={item.title}
            className="form-check-input"
            type="checkbox"
            id={item.id}
          />
          <label className="form-check-label" htmlFor={item.id}>
            {item.title}
          </label>
        </div>
      ))}
    </div>
  );
}
