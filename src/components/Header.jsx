import { useProducts } from "../contexts/ProductsContext";

function Header() {
  const { products } = useProducts();
  return (
    <div className=" bg-gray-600 text-white flex items-center justify-center gap-x-2 py-2 font-bold mb-10">
      <h1>Inventory App using tailwind & React.js</h1>
      <div className="border-2 border-white bg-gray-400 rounded-full size-8 text-center p-1">
        {products.length}
      </div>
    </div>
  );
}

export default Header;
