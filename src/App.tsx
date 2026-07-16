import { BrowserRouter, Routes, Route } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import routes from "./core/routes";

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
