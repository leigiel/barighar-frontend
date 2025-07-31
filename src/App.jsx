import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./route/Route/Route";

function App({ children }) {
  useEffect(() => {
    // Test fetch call to backend
    fetch(`${import.meta.env.VITE_API_BASE_URL}/api/listings`)
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ Listings fetched from backend:", data);
      })
      .catch((error) => {
        console.error("❌ Error fetching listings:", error);
      });
  }, []);

  return (
    <RouterProvider router={router}>
      {children}
    </RouterProvider>
  );
}

export default App;
