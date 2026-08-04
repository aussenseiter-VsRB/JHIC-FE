import { BrowserRouter, Routes, Route } from "react-router";
import type { RouteObject } from "react-router";
import routes from "./core/routes";
import 'leaflet/dist/leaflet.css';

function renderRoutes(items: RouteObject[]) {
  return items.map((route, index) => (
    <Route
      key={route.path ?? index}
      path={route.path}
      element={route.element}
    >
      {route.children ? renderRoutes(route.children) : null}
    </Route>
  ));
}

function App() {
  return (
    <BrowserRouter>
      <Routes>{renderRoutes(routes)}</Routes>
    </BrowserRouter>
  );
}

export default App;
