import { useState } from "react";
import AddNewCategory from "./AddNewCategory";
import AddNewProduct from "./AddNewProduct";
import Filters from "./Filters";
import ProductList from "./ProductList";

function AppBody() {
  const [showAddCategory, setShowAddCategory] = useState(false);
  return (
    <div className="flex flex-col justify-between container mx-auto xl:max-w-screen-xl md:flex-row md:gap-x-20">
      {/* Add category and product */}
      <div className="w-full">
        {showAddCategory ? (
          <AddNewCategory />
        ) : (
          <h1
            onClick={() => setShowAddCategory(true)}
            className="cursor-pointer font-bold text-xl text-gray-400"
          >
            Add New Category
          </h1>
        )}
        <AddNewProduct />
      </div>

      {/* filters and list */}
      <div className="w-full">
        <Filters />
        <ProductList />
      </div>
    </div>
  );
}

export default AppBody;
