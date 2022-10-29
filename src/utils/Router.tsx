import React from "react";
import { createBrowserRouter } from "react-router-dom";

import { StaticLayout } from "../components/ui-components/static-layout";
import { Navbar } from "../components/ui-components/navbar";
import { UnknownPage } from "../components/unknown-page";
import { ErrorPage } from "../components/error-page";
import { HomePage } from "../components/home-page";
import { Skills } from "../components/skills-page";

const routerConfig = [
  {
    path: "/",
    element: (
      <StaticLayout>
        <Navbar />
      </StaticLayout>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "projects",
        element: <Skills />,
      },
      {
        path: "contact",
        element: <Skills />,
      },
      {
        path: "*",
        element: <UnknownPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routerConfig);
