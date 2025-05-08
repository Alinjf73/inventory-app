import { Link } from "react-router-dom";
import { useProducts } from "../contexts/ProductsContext";
import { HiEye, HiPencil, HiTrash } from "react-icons/hi";
import Modal from "../UI/Modal";
import { useEffect, useRef, useState } from "react";
import ConfirmDelete from "../UI/ConfirmDelete";
import AddNewProduct from "./AddNewProduct";
import Count from "../UI/Count";

function ProductList() {
  const { products, filteredProducts, deleteProduct } = useProducts();
  const [openDeleteId, setOpenDeleteId] = useState(null);
  const [openEditId, setOpenEditId] = useState(null);

  const handleDeleteProduct = (id) => {
    deleteProduct(id);
    setOpenDeleteId(null);
  };

  // scroll to productList after adding a product in mobile mode
  const productListRef = useRef(null);
  const prevProductCount = useRef(products.length);

  useEffect(() => {
    if (prevProductCount.current === products.length) return;

    prevProductCount.current = products.length;

    if (productListRef.current) {
      productListRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [products.length]);

  return (
    <div ref={productListRef} className="text-secondary-900" id="product-list">
      <h2 className="font-bold text-lg">Product List</h2>
      <hr className="mb-4 border-secondary-900" />
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
            <span className="border border-primary-900 bg-secondary-0 rounded-full py-0.5 px-2">
              {product.category}
            </span>
            <Count productCount={product.quantity} />

            {/* see product */}
            <span>
              <Link
                className="flex justify-center"
                to={`/product/${product.id}`}
              >
                <HiEye className="size-6 text-primary-800 hover:scale-125 transition-all duration-300" />
              </Link>
            </span>

            {/* edit product */}
            <button onClick={() => setOpenEditId(product.id)}>
              <HiPencil className="size-6 hover:scale-125 transition-all duration-300" />
            </button>
            <Modal
              open={openEditId === product.id}
              onClose={() => setOpenEditId(null)}
              title={`Editing ${product.title}`}
            >
              <AddNewProduct
                productToEdit={product}
                setOpenEdit={setOpenEditId}
              />
            </Modal>

            {/* delete product */}
            <button onClick={() => setOpenDeleteId(product.id)}>
              <HiTrash className="size-6 text-error hover:scale-125 transition-all duration-300" />
            </button>
            <Modal
              open={openDeleteId === product.id}
              onClose={() => setOpenDeleteId(null)}
              title={product.title}
            >
              <ConfirmDelete
                resourceName={product.title}
                onClose={() => setOpenDeleteId(null)}
                onConfirm={() => handleDeleteProduct(product.id)}
              />
            </Modal>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
