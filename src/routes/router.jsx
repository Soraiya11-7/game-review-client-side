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
import GameWatchlist from "../pages/GameWatchlist";
import MyReviews from "../pages/MyReviews";
import UpdateReview from "../pages/UpdateReview";


const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage></ErrorPage>,
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch("https://assignment-10-server-gamma-mocha.vercel.app/reviews/rated"),
          
        },
        {
          path: "/addReview",
          element: <AddReview></AddReview>,
          
        },
        
        {
          path: "/reviews",
          element: <AllReviews></AllReviews>,
          loader: () => fetch("https://assignment-10-server-gamma-mocha.vercel.app/reviews"),
        },
        {
          path: "/myReviews",
          element: <SecretRoutes><MyReviews></MyReviews></SecretRoutes> ,
        },
        {
          path: "/review/:id",
          element: <ReviewDetails></ReviewDetails>,
          loader: ({params}) => fetch(`https://assignment-10-server-gamma-mocha.vercel.app/review/${params.id}`),
        },
        {
          path: "/updateReview/:id",
          element: <SecretRoutes><UpdateReview></UpdateReview></SecretRoutes> ,
          loader: ({params}) => fetch(`https://assignment-10-server-gamma-mocha.vercel.app/review/${params.id}`),
        },
        {
          path: "/myWatchlist",
          element: <SecretRoutes><GameWatchlist></GameWatchlist></SecretRoutes>,
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