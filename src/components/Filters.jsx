import { useState, useCallback } from "react";
import { useCategories } from "../contexts/CategoriesContext";
import { useProducts } from "../contexts/ProductsContext";
import SelectInput from "../UI/SelectInput";
import Input from "../UI/Input";

const sortOptions = [
  { id: "latest", title: "latest" },
  { id: "earliest", title: "earliest" },
];

function Filters() {
  const { products, setFilteredProducts } = useProducts();
  const { categories = [] } = useCategories();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSort, setSelectedSort] = useState("");

  const filterProducts = useCallback(
    (search, category, sort) => {
      let newFilteredProducts = [...products];

      if (search?.trim()) {
        newFilteredProducts = newFilteredProducts.filter((product) =>
          product.title.toLowerCase().includes(search.toLowerCase())
        );
      }

      if (category !== "all") {
        newFilteredProducts = newFilteredProducts.filter(
          (product) => product.category === category
        );
      }

      if (sort === "latest") {
        newFilteredProducts = newFilteredProducts.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
      } else if (sort === "earliest") {
        newFilteredProducts = newFilteredProducts.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
      }

      setFilteredProducts(newFilteredProducts);
    },
    [products, setFilteredProducts]
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    filterProducts(e.target.value, selectedCategory, selectedSort);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    filterProducts(searchTerm, e.target.value, selectedSort);
  };

  const handleSortChange = (e) => {
    setSelectedSort(e.target.value);
    filterProducts(searchTerm, selectedCategory, e.target.value);
  };

  return (
    <div className="text-gray-400 mb-8">
      <h2 className="text-gray-400">Filters</h2>
      <hr className="mb-4" />

      {/* search filter */}
      <div className="flex items-center justify-between mb-4">
        <label htmlFor="search">Search</label>
        <Input
          className="bg-inherit border border-gray-400 rounded-lg p-1"
          type="text"
          id="search"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {/* sort filter */}
      <div className="flex items-center justify-between mb-4">
        <span>Sort</span>
        <SelectInput
          options={sortOptions}
          value={selectedSort}
          onChange={handleSortChange}
        />
      </div>

      {/* category filter */}
      <div className="flex items-center justify-between mb-4">
        <span>Category</span>
        <SelectInput
          options={[{ id: "all", title: "all" }, ...categories]}
          value={selectedCategory}
          onChange={handleCategoryChange}
        />
      </div>
    </div>
  );
}

export default Filters;
