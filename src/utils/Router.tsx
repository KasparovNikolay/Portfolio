import React from "react";

import { createBrowserRouter } from "react-router-dom";

import { ContactPage } from "../components/contact-page";
import { ErrorPage } from "../components/error-page";
import { HomePage } from "../components/home-page";
import { ProjectsPage } from "../components/projects-page";
import { SkillsPage } from "../components/skills-page";
import { Navbar } from "../components/ui-components/navbar";
import { StaticLayout } from "../components/ui-components/static-layout";
import { UnknownPage } from "../components/unknown-page";

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
        element: <SkillsPage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "*",
        element: <UnknownPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routerConfig);
