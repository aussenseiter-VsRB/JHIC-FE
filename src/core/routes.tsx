import { type RouteObject } from "react-router-dom";

import Layout from "./layout";
import Home from "../modules/home/home";
import Profile from "../modules/profile/profile";
import PageJurusan from "../modules/jurusan/services/pageJurusan";

import ProfileSettings from "../modules/profile/settings/page";
import PagePplg from "../modules/jurusanPplg/services/pagePplg";
import PageAkuntansi from "../modules/jurusanAkuntansi/services/pageAkuntansi";
import PageHotel from "../modules/jurusanHotel/services/pageHotel";

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
        path: "/jurusan/pplg",
        element: <PagePplg />,
      },
      {
        path: "/jurusan/akuntansi",
        element: <PageAkuntansi />,
      },
      {
        path: "/jurusan/hotel",
        element: <PageHotel />,
      },
    ],
  },
];

export default routes;
