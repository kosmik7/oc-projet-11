import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import ReduxApp from "./ReduxApp";

import Header from "../components/Header/";
import Footer from "../components/Footer/";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
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
        path: "/redux-app",
        element: <ReduxApp />,
      },
    ],
  },
]);

export default router;
