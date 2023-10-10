import {
  createBrowserRouter, createRoutesFromElements, Route, RouterProvider,
} from "react-router-dom";
import React from "react";
import Transfer from "./view/modules/Transfer";
import routes from "./view/routes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Transfer />} path={routes.login} />
      <Route path="*" element={<Transfer />} />
    </>,
  ),
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
