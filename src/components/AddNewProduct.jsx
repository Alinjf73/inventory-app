import { useState } from "react";
import { useProducts } from "../contexts/ProductsContext";
import Input from "../UI/Input";
import SelectInput from "../UI/SelectInput";
import { useCategories } from "../contexts/CategoriesContext";

function AddNewProduct() {
  const { products, setProducts, setFilteredProducts } = useProducts();
  const { categories } = useCategories();
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");

  const handleAddNewProduct = (e) => {
    e.preventDefault();
    if (!title.trim() || !quantity.trim() || !category) return;
    const newProduct = {
      id: Date.now(),
      title,
      quantity,
      category,
      createdAt: new Date(Date.now()).toISOString(),
    };
    setProducts([...products, newProduct]);
    setFilteredProducts([...products, newProduct]);
    setTitle("");
    setQuantity("");
    setCategory("");
  };

  return (
    <div className="my-6">
      <h1 className="text-xl font-bold text-white mb-2">Add New Product</h1>
      <form
        onSubmit={handleAddNewProduct}
        className="bg-gray-700 p-4 space-y-4 rounded-lg"
      >
        <Input
          label="title"
          id="productTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          label="quantity"
          id="quantity"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <SelectInput
          label="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          options={categories}
        >
          {" "}
          <option>select a category</option>
        </SelectInput>
        <button
          type="submit"
          className="w-full py-2 px-4 rounded-lg bg-gray-500 text-white"
        >
          Add New Product
        </button>
      </form>
    </div>
  );
}

export default AddNewProduct;
