import React, { useEffect } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Game from "./Game/Game";

import WitherAPIAPP from "./WetherAPi/WitherAPIAPP";
import CardDetails from "./WetherAPi/CardDetails";
import HeaderHandel from "./WetherAPi/header";
import LikedCities from "./WetherAPi/LikedCities";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<HeaderHandel />}>
        <Route index element={<Game />} />
        <Route element={<WitherAPIAPP />} path="/WitherAPIAPP" />
        <Route element={<CardDetails />} path="/posts/:id" />
        <Route element={<LikedCities />} path="/LikedCities" />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
export default App;
