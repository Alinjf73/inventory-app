import { useProducts } from "../contexts/ProductsContext";

function ProductList() {
  const { filteredProducts, deleteProduct } = useProducts();

  const handleDeleteProduct = (id) => {
    deleteProduct(id);
  };

  return (
    <div className="text-gray-400 h-96">
      <h2 className="text-gray-300 font-bold text-lg">Product List</h2>
      <hr className="mb-4" />
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className="flex items-center justify-between mb-4"
        >
          <span>{product.title}</span>
          <div className="flex items-center gap-x-3">
            <span>
              {new Date(product.createdAt).toLocaleDateString("fa-IR")}
            </span>
            <span className="border border-gray-400 rounded-full py-0.5 px-1">
              {product.category}
            </span>
            <span className="border-2 border-white bg-gray-400 text-white rounded-full size-8 text-center p-1">
              {product.quantity}
            </span>
            <button
              onClick={() => handleDeleteProduct(product.id)}
              className="border border-red-600 text-red-600 rounded-full py-0.5 px-1"
            >
              delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
