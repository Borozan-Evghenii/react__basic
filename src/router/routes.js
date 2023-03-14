import About from "../pages/About";
import Login from "../pages/Login";
import Posts from "../pages/Posts";
import Single from "../pages/Single";

export const privateRoutes = [
  { path: "/", element: Posts },
  { path: "/about", element: About },
  { path: "/post/:id", element: Single },
  { path: "*", element: Posts },
];
export const publicRoutes = [
  { path: "/login", element: Login },
  { path: "*", element: Login },
];
