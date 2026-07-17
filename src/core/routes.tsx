import { type RouteObject } from "react-router-dom";

import Layout from "./layout";
import Home from "../modules/home/home";
import Profile from "../modules/profile/profile";

import ProfileSettings from "../modules/profile/settings/page";
const routes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/profile",
        element: <Profile />,
        children: [
        
          { path: "settings", element: <ProfileSettings /> },
        ],
      },
    ],
  },
];

export default routes;
