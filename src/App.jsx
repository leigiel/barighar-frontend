import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./route/Route/Route";

function App({children}) {
  return (
   <RouterProvider router={router}>
    {children}
   </RouterProvider>
  );
}

export default App;
