import { useMemo } from "react";
import { useProducts } from "../contexts/ProductsContext";
import Count from "./Count";
import DarkModeToggle from "./DarkModeToggle";

function AppHeader() {
  const { products } = useProducts();
  const productCount = useMemo(() => products?.length ?? 0, [products]);

  return (
    <div className=" bg-secondary-400 text-secondary-900 flex items-center justify-center gap-x-2 p-2 font-bold md:text-lg  mb-10">
      <h1>Inventory App using tailwind & React.js</h1>
      <Count productCount={productCount} />
      <DarkModeToggle />
    </div>
  );
}

export default AppHeader;
