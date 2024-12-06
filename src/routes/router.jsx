import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "../Layout/MainLayout";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import SecretRoutes from "./SecretRoutes";
import AddReview from "../pages/AddReview";
import AllReviews from "../pages/AllReviews";
import Home from "../pages/Home";
import ReviewDetails from "../pages/ReviewDetails";


const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage></ErrorPage>,
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch("http://localhost:5000/reviews/rated"),
          
        },
        {
          path: "/addReview",
          element: <AddReview></AddReview>,
          
        },
        
        {
          path: "/reviews",
          element: <AllReviews></AllReviews>,
          loader: () => fetch("http://localhost:5000/reviews"),
        },
        {
          path: "/myReviews",
          element: <SecretRoutes><h2>myReviews</h2></SecretRoutes> ,
        },
        {
          path: "/review/:id",
          element: <SecretRoutes><ReviewDetails></ReviewDetails></SecretRoutes> ,
          loader: ({params}) => fetch(`http://localhost:5000/reviews/${params.id}`),
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