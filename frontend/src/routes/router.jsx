import { createBrowserRouter } from "react-router-dom";

import Home from "./Home";
import ReduxApp from "./ReduxApp"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/redux-app",
    element: <ReduxApp />,
  },

]);

export default router;
