import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "../Layout/MainLayout";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import SecretRoutes from "./SecretRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage></ErrorPage>,
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <h2>Hello</h2>,
          
        },
        {
          path: "/addReview",
          element:  <SecretRoutes><h2>add Reviews</h2></SecretRoutes>,
          
        },
        
        {
          path: "/reviews",
          element: <h2>reviews</h2>,
        },
        {
          path: "/myReviews",
          element: <SecretRoutes><h2>myReviews</h2></SecretRoutes> ,
        },
        {
          path: "/myWatchlist",
          element: <SecretRoutes><h2>Watchlist</h2></SecretRoutes>,
        },
        {
          path: "auth",
          element: <AuthLayout></AuthLayout>,
          children: [
              {
                  path: "/auth/login",
                  element: <Login></Login>,
              },
              {
                  path: "/auth/register",
                  element: <Registration></Registration>,
              },
             
          ],
      },
      ]
    },
   
  ],
  {
    future: {
      v7_normalizeFormMethod: true,
      v7_fetcherPersist: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionStatusRevalidation: true
    },
  }
);

  export default router;