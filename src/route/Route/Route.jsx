import React from 'react';
import { createBrowserRouter } from "react-router-dom";

import Main from "../../layout/Main/Main";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";
import TermsPrivacyPage from "../../pages/TermsPrivacyPage/TermsPrivacyPage";
import AllListings from "../../pages/listings/AllListings/AllListings";
import ListingDetails from "../../pages/listings/ListingDetails/ListingDetails";
import ListingForm from "../../pages/listings/ListingForm/ListingForm";
import NotFound from "../../pages/Shared/NotFound/NotFound";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/terms", element: <TermsPrivacyPage /> },
      { path: "/listings", element: <AllListings /> },
      { path: "/listing/:id", element: <ListingDetails /> },
      { path: "/create-listing", element: <ListingForm /> },
      {
  path: "/login",
  element: <Login />
},
{ path: "/register", element: <Register /> }
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
