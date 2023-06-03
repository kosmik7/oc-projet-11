import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserProfile } from "../features/user/userAPI";

import Home from "./Home";
import SignIn from "./SignIn";
import User from "./User";
import ReduxApp from "./ReduxApp";
import Header from "../components/Header/";
import Footer from "../components/Footer/";

function Layout() {
  UserProfile();
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

function AuthLayout() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to="/sign-in" />;
  }

  return <Outlet />;
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/redux-app",
        element: <ReduxApp />,
      },
      {
        element: <AuthLayout />,
        children: [
          {
            path: "user",
            element: <User />,
          },
        ],
      },
    ],
  },
]);

export default router;
