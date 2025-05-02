import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [products, setProducts] = useLocalStorage("PRODUCTS", []);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
    setFilteredProducts(products.filter((product) => product.id !== id));
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
