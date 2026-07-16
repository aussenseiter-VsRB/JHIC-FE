import { type RouteObject } from "react-router-dom";

import Home from "../modules/home/home";
import Profile from "../modules/profile/profile";
import ProfileEdit from "../modules/profile/edit/page";
import ProfileSettings from "../modules/profile/settings/page";
const routes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/profile", element: <Profile /> },
  { path: "/profile/edit", element: <ProfileEdit /> },
  { path: "/profile/settings", element: <ProfileSettings /> },
];

export default routes;
