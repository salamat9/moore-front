import Login from "../pages/Login";
import Main from "../pages/Main";

export const privateRoutes = [
  {path: "/main",component: <Main />},
]

export const publicRoutes = [
  {path: "/login",component: <Login />},
]
