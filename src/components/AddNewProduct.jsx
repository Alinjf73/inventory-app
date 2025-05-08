import { useProducts } from "../contexts/ProductsContext";
import Input from "../UI/Input";
import SelectInput from "../UI/SelectInput";
import { useCategories } from "../contexts/CategoriesContext";
import { useForm } from "react-hook-form";

function AddNewProduct({ titleText, setOpenEdit, productToEdit = {} }) {
  const { products, setProducts, setFilteredProducts } = useProducts();
  const { categories } = useCategories();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues: productToEdit });

  const handleAddNewProduct = (data) => {
    let updatedProducts;

    if (productToEdit.id) {
      // edit product
      updatedProducts = products.map((p) =>
        p.id === productToEdit.id ? { ...p, ...data } : p
      );
    } else {
      // add new product
      const newProduct = {
        id: Date.now(),
        title: data.title,
        quantity: data.quantity,
        category: data.category,
        createdAt: new Date().toISOString(),
      };
      updatedProducts = [...products, newProduct];
    }

    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
    reset();
    setOpenEdit(false);
  };

  return (
    <div className="my-6">
      <h1 className="text-xl font-bold text-secondary-700 mb-2">{titleText}</h1>
      <form
        onSubmit={handleSubmit(handleAddNewProduct)}
        className="bg-secondary-300 p-6 space-y-4 rounded-lg"
      >
        <Input
          label="title"
          name="title"
          register={register}
          required
          validationSchema={{
            required: "title is required",
            minLength: {
              value: 3,
              message: "title length must be more than 3 characters",
            },
          }}
          errors={errors}
          autoFocus
        />
        <Input
          label="quantity"
          name="quantity"
          register={register}
          required
          validationSchema={{
            required: "quantity is required",
          }}
          type="number"
          errors={errors}
        />
        <SelectInput
          label="category"
          name="category"
          register={register}
          required
          validationSchema={{
            required: "category is required",
          }}
          options={categories}
          errors={errors}
        />

        <button type="submit" className="btn btn--primary">
          {productToEdit.id ? "Update Product" : "Add New Product"}
        </button>
      </form>
    </div>
  );
}

export default AddNewProduct;
