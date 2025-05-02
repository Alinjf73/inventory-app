import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const UserContext = createContext();

export function CategoriesProvider({ children }) {
  const [categories, setCategories] = useLocalStorage("CATEGORIES", []);
  return (
    <UserContext.Provider value={{ categories, setCategories }}>
      {children}
    </UserContext.Provider>
  );
}

export const useCategories = () => useContext(UserContext);
