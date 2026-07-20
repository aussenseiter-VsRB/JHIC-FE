import { type RouteObject } from "react-router-dom";

import Layout from "./layout";
import Home from "../modules/home/home";
import Profile from "../modules/profile/profile";
import PageJurusan from "../modules/jurusan/services/pageJurusan";
import PageJurusanDetail from "../modules/jurusan/services/pageJurusanDetail";

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
      {
        path: "/jurusan",
        element: <PageJurusan />,
      },
      {
        path: "/jurusan/:slug",
        element: <PageJurusanDetail />,
      },
    ],
  },
];

export default routes;
