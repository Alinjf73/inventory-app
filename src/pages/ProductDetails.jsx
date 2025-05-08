import { useParams } from "react-router-dom";
import { useProducts } from "../contexts/ProductsContext";
import { HiArrowRight } from "react-icons/hi";
import useMoveBack from "../hooks/useMoveBack";

function ProductPage() {
  const { id } = useParams();
  const { products } = useProducts();
  const moveBack = useMoveBack();

  const product = products.find((p) => p.id === Number(id));
  console.log(product);

  if (!product) {
    return (
      <div className="text-red-500">There is no product with this ID!</div>
    );
  }

  return (
    <div className="container mx-auto xl:max-w-screen-xl text-secondary-900">
      <h2 className="font-bold text-xl">{product.title}</h2>
      <hr className="mb-4 border-secondary-900" />
      <div className="flex justify-between">
        <div className="flex flex-col gap-4 text-lg">
          <span>Category: {product.category}</span>
          <span>Quantity: {product.quantity}</span>
          <span>
            Created at:{" "}
            {new Date(product.createdAt).toLocaleDateString("fa-IR")}
          </span>
        </div>
        <div>
          <button onClick={moveBack} className="flex items-center gap-x-2">
            <HiArrowRight className="size-6 text-primary-900" />
            <span>برگشت</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
