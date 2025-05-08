import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AppHeader from "./UI/AppHeader";
import { CategoriesProvider } from "./contexts/CategoriesContext";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import { ProductsProvider } from "./contexts/ProductsContext";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <CategoriesProvider>
      <ProductsProvider>
        <DarkModeProvider>
          <div className="bg-secondary-100 min-h-screen">
            <AppHeader />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="product/:id" element={<ProductDetails />} />
            </Routes>
          </div>
        </DarkModeProvider>
      </ProductsProvider>
    </CategoriesProvider>
  );
}

export default App;
