import React, { FC, StrictMode } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { StaticLayout } from "./components/ui-components/static-layout";
import { Navbar } from "./components/ui-components/navbar";
import { Skills } from "./components/skills-page";
import { HomePage } from "./components/home-page";

import "./styles.scss";
import { ErrorBoundary } from "./components/ErrorBoundary";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={
        <StaticLayout>
          <Navbar />
        </StaticLayout>
      }
    >
      <Route path="/" element={<HomePage />} />
      <Route path="/skills" element={<Skills />} />
    </Route>
  )
);

export const App: FC = () => {
  return (
    <StrictMode>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </StrictMode>
  );
};
