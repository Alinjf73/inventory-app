import AppBody from "./components/AppBody";
import Header from "./components/Header";
import { CategoriesProvider } from "./contexts/CategoriesContext";
import { ProductsProvider } from "./contexts/ProductsContext";

function App() {
  return (
    <CategoriesProvider>
      <ProductsProvider>
        <div className="bg-gray-800 h-auto">
          <Header />
          <AppBody />
        </div>
      </ProductsProvider>
    </CategoriesProvider>
  );
}

export default App;
