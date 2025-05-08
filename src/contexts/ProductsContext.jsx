import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [products, setProducts] = useLocalStorage("PRODUCTS", []);
  const [filteredProducts, setFilteredProducts] = useState(() => {
    return JSON.parse(localStorage.getItem("PRODUCTS")) || [];
  });

  const deleteProduct = (id) => {
    setProducts((prevProducts) => {
      const updatedProducts = prevProducts.filter(
        (product) => product.id !== id
      );
      setFilteredProducts(updatedProducts);
      return updatedProducts;
    });
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        filteredProducts,
        setFilteredProducts,
        deleteProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export const useProducts = () => useContext(ProductsContext);
