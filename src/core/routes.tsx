import { type RouteObject } from "react-router-dom";

import Layout from "./layout";
import Home from "../modules/home/home";
import Profile from "../modules/profile/profile";
import PageJurusan from "../modules/jurusan/services/PageJurusan";
import PageJurusanDetail from "../modules/jurusan/services/PageJurusanDetail";

import Berita from "../modules/berita/berita";
import BeritaDetail from "../modules/berita/berita-detail/page";
import Fasilitas from "../modules/fasilitas/fasilitas";
import FasilitasJurusan from "../modules/fasilitas-jurusan/fasilitas-jurusan";
import Ppdb from "../modules/ppdb/ppdb";
import Ekstrakurikuler from "../modules/ekstrakurikuler/ekstrakurikuler";
import EkstrakurikulerDetail from "../modules/ekstrakurikuler/ekstrakurikuler-detail/page";
import NexxaMatch from "../modules/nexxa-match/nexxa-match";
import Profilguru from "../modules/profilguru/profilguru";
import Hubin from "../modules/hubin/hubin";
import Panorama from "../modules/panorama/panorama";
import Prestasi from "../modules/prestasi/prestasi";
import Daftar from "../modules/daftar/daftar";
import NotFound from "../modules/not-found/not-found";
import Alumni from "../modules/alumni/alumni";

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
      { path: "/berita/:id", element: <BeritaDetail /> },
      { path: "/fasilitas", element: <Fasilitas /> },
      { path: "/fasilitas-jurusan", element: <FasilitasJurusan /> },
      { path: "/fasilitas-jurusan/:jurusan", element: <FasilitasJurusan /> },
      { path: "/panorama/:slug", element: <Panorama /> },
      { path: "/ppdb", element: <Ppdb /> },
      { path: "/ekstrakurikuler", element: <Ekstrakurikuler /> },
      { path: "/ekstrakurikuler/:slug", element: <EkstrakurikulerDetail /> },
      { path: "/nexxa-match", element: <NexxaMatch /> },
      { path: "/profilguru", element: <Profilguru /> },
      { path: "/hubin", element: <Hubin /> },
      { path: "/alumni", element: <Alumni /> },
      { path: "/prestasi", element: <Prestasi /> },
      { path: "/daftar", element: <Daftar /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];

export default routes;
