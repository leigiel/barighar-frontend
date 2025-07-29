import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import NotFound from "../../pages/Shared/NotFound/NotFound";
import Contact from "../../pages/Contact/Contact";
import TermsPrivacyPage from "../../pages/TermsPrivacyPage/TermsPrivacyPage";
import AllListings from "../../pages/listings/AllListings/AllListings";
import ListingDetails from "../../pages/listings/ListingDetails/ListingDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/terms",
        element: <TermsPrivacyPage></TermsPrivacyPage>,
      },
      {
        path: "/listings",
        element:<AllListings></AllListings>,
      },
      {
        path: "/listing/:id",
        element: <ListingDetails></ListingDetails>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
export default router;
