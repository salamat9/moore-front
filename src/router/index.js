import Login from "../pages/Login";
import Main from "../pages/Main";
import Flats from "../pages/Flats";
import Managers from "../pages/Managers";

export const privateRoutes = [
  {path: "/main",component: <Main />},
  {path: "/flats",component: <Flats />},
  {path: "/managers",component: <Managers />},
]

export const publicRoutes = [
  {path: "/login",component: <Login />},
]
