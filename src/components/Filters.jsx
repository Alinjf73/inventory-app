import { useForm } from "react-hook-form";
import { useCategories } from "../contexts/CategoriesContext";
import { useProducts } from "../contexts/ProductsContext";
import SelectInput from "../UI/SelectInput";
import Input from "../UI/Input";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const sortOptions = [
  { id: "latest", title: "latest" },
  { id: "earliest", title: "earliest" },
];

function Filters() {
  const { products, setFilteredProducts } = useProducts();
  const { categories = [] } = useCategories();
  const [searchParams, setSearchParams] = useSearchParams();

  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      search: searchParams.get("search") || "",
      category: searchParams.get("category") || "all",
      sort: searchParams.get("sort") || "latest",
    },
  });

  const filterProducts = ({ search, category, sort }) => {
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
      newFilteredProducts = newFilteredProducts
        .slice()
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (sort === "earliest") {
      newFilteredProducts = newFilteredProducts
        .slice()
        .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }

    setFilteredProducts(newFilteredProducts);
  };

  useEffect(() => {
    const initialFilters = {
      search: searchParams.get("search") || "",
      category: searchParams.get("category") || "all",
      sort: searchParams.get("sort") || "latest",
    };

    filterProducts(initialFilters);
    setSearchParams(initialFilters);

    const subscription = watch((data) => {
      filterProducts(data);
      setSearchParams(data);
    });

    return () => subscription.unsubscribe();
  }, [watch, setSearchParams, products]);

  return (
    <form
      className="text-secondary-900 mb-8"
      onSubmit={handleSubmit(filterProducts)}
    >
      <h2 className="font-bold">Filters</h2>
      <hr className="mb-4 border-secondary-900" />

      {/* Search filter */}
      <div className="flex items-center justify-between mb-4">
        <label htmlFor="search">Search</label>
        <Input type="text" id="search" register={register} name="search" />
      </div>

      {/* Sort filter */}
      <div className="flex items-center justify-between mb-4">
        <span>Sort</span>
        <SelectInput options={sortOptions} register={register} name="sort" />
      </div>

      {/* Category filter */}
      <div className="flex items-center justify-between mb-4">
        <span>Category</span>
        <SelectInput
          options={[{ id: "all", title: "all" }, ...categories]}
          register={register}
          name="category"
        />
      </div>
    </form>
  );
}

export default Filters;
