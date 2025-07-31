import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
        <AuthProvider>
    <div data-theme="forest" className="min-h-screen">
      <App />
    </div>
    </AuthProvider>
  </StrictMode>
);
