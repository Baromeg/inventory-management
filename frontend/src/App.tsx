import "./App.css";
import { ProductList } from "./components/ProductList";

function App() {
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Inventory</h1>
      <ProductList />
    </div>
  );
}

export default App;
