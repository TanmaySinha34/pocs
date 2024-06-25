import { createBrowserRouter } from "react-router-dom";
import AboutComp from "../Components/AboutComp";
import MainDashBoardComp from "../Components/MainDashBoardComp";
import MenuComp from "../Components/MenuComp";
import HomeComp from "../Components/HomeComp";
import ContactComp from "../Components/ContactComp";
import ProtectedRoute from "./ProtectedRoute";
import LoginComp from "../Components/LoginComp";
import DessertComp from "../Components/DessertComp";
import CartCrudComp from "../Crud/CartCrud";
import SignUp from "../Components/SignUp";
import SeatBookingComp from "../Components/SeatBookComp";
import AddTableComp from "../Components/AddTable";
import Shop from "../Components/Shop";
import Bookingscomp from "../Components/Bookings";
import MainCart from "../Components/MainCart";
import EditbookingComp from "../Components/EditTable";

const router = createBrowserRouter([
  { path: "/", element: <LoginComp /> },
  { path: "login", element: <LoginComp /> },
  {
    path: "main",
    element: <MainDashBoardComp />,

    children: [
      { path: "", element: <HomeComp /> },

      { path: "about", element: <AboutComp /> },
      { path: "menu", element: <ProtectedRoute RoutingComponent={MenuComp} /> },
      { path: "contact", element: <ContactComp /> },
      {
        path: "desserts",
        element: <ProtectedRoute RoutingComponent={DessertComp} />,
      },
      {
        path: "cart",
        element: <ProtectedRoute RoutingComponent={MainCart} />,
      },
      {
        path: "booking",
        element: <ProtectedRoute RoutingComponent={AddTableComp} />,
      },
      {
        path: "booking/:_id",
        element: <ProtectedRoute RoutingComponent={EditbookingComp} />,
      },
      { path: "signup", element: <SignUp /> },
      { path: "shop", element: <Shop /> },
      { path: "bookings", element: <Bookingscomp /> },
    ],
  },
]);

export default router;
