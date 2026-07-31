import { type RouteObject } from "react-router-dom";

import Layout from "./layout";
import Home from "../modules/home/home";
import Profile from "../modules/profile/profile";
import PageJurusan from "../modules/jurusan/services/PageJurusan";
import PageJurusanDetail from "../modules/jurusan/services/PageJurusanDetail";

import Berita from "../modules/berita/berita";
import Fasilitas from "../modules/fasilitas/fasilitas";
import FasilitasJurusan from "../modules/fasilitas-jurusan/fasilitas-jurusan";
import Ppdb from "../modules/ppdb/ppdb";
import Ekstrakurikuler from "../modules/ekstrakurikuler/ekstrakurikuler";
import MyJurusan from "../modules/myJurusan/myJurusan";
import Profilguru from "../modules/profilguru/profilguru";
import Hubin from "../modules/hubin/hubin";
import Panorama from "../modules/panorama/panorama";
import Prestasi from "../modules/prestasi/prestasi";

const routes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/profile", element: <Profile /> },
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
      { path: "/fasilitas-jurusan", element: <FasilitasJurusan /> },
      { path: "/panorama/:slug", element: <Panorama /> },
      { path: "/ppdb", element: <Ppdb /> },
      { path: "/ekstrakurikuler", element: <Ekstrakurikuler /> },
      { path: "/my-jurusan", element: <MyJurusan /> },
      { path: "/profilguru", element: <Profilguru /> },
      { path: "/hubin", element: <Hubin /> },
      { path: "/prestasi", element: <Prestasi /> },
    ],
  },
];

export default routes;
