import AddNewCategory from "../components/AddNewCategory";
import AddNewProduct from "../components/AddNewProduct";
import Filters from "../components/Filters";
import ProductList from "../components/ProductList";
import useLocalStorage from "../hooks/useLocalStorage";

function MainPage() {
  const [showAddCategory, setShowAddCategory] = useLocalStorage(
    "SHOWADDCATEGORY",
    false
  );
  return (
    <div className="flex flex-col justify-between container mx-auto xl:max-w-screen-xl md:flex-row md:gap-x-20">
      {/* Add category and product */}
      <div className="w-full">
        {showAddCategory ? (
          <AddNewCategory setShow={setShowAddCategory} />
        ) : (
          <h1
            onClick={() => setShowAddCategory(true)}
            className="cursor-pointer font-bold text-xl text-gray-400"
          >
            Add New Category?
          </h1>
        )}
        <AddNewProduct titleText="Add New Product" />
      </div>

      {/* filters and list */}
      <div className="w-full">
        <Filters />
        <ProductList />
      </div>
    </div>
  );
}

export default MainPage;
