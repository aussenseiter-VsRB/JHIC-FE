import { type RouteObject } from "react-router-dom";

import Layout from "./layout";
import Home from "../modules/home/home";
import Profile from "../modules/profile/profile";
import PageJurusan from "../modules/jurusan/services/PageJurusan";
import PageJurusanDetail from "../modules/jurusan/services/PageJurusanDetail";

import ProfileSettings from "../modules/profile/settings/page";
import Berita from "../modules/berita/berita";
import Fasilitas from "../modules/fasilitas/fasilitas";
import Ppdb from "../modules/ppdb/ppdb";
import Ekstrakulikuler from "../modules/ekstrakulikuler/ekstrakulikuler";
import Profilguru from "../modules/profilguru/profilguru";
import Hubin from "../modules/hubin/hubin";

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
      { path: "/berita", element: <Berita /> },
      { path: "/fasilitas", element: <Fasilitas /> },
      { path: "/ppdb", element: <Ppdb /> },
      { path: "/ekstrakurikuler", element: <Ekstrakulikuler /> },
      { path: "/profilguru", element: <Profilguru /> },
      { path: "/hubin", element: <Hubin /> },
    ],
  },
];

export default routes;
