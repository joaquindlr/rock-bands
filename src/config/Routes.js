import LayoutHome from "../components/layout/LayoutHome";
import Home from "../pages/home";
import BandProfile from "../pages/bandProfile";
import Login from "../pages/login";

import Error404 from "../pages/error404";
const routes = [
  {
    path: "/",
    component: LayoutHome,
    exact: false,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
      },
      {
        path: "/band-profile/:id",
        component: BandProfile,
        exact: true,
      },
      {
        path: "/login",
        component: Login,
        exact: true,
      },
      {
        component: Error404,
      },
    ],
  },
];

export default routes;
