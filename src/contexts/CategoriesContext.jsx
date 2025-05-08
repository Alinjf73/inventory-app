import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const CategoriesContext = createContext();

export function CategoriesProvider({ children }) {
  const [categories, setCategories] = useLocalStorage("CATEGORIES", []);
  return (
    <CategoriesContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoriesContext.Provider>
  );
}

export const useCategories = () => useContext(CategoriesContext);
