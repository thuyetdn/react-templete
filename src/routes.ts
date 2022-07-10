import { DashBoard } from "layout";
import { paths } from "lib/constants";
import { lazy } from "react";

const routes = [
  {
    route: "*",
    component: DashBoard,
    routes: [
      {
        path: paths.Landing,
        exact: true,
        component: lazy(() => import("pages/HelloWorld")),
      },
    ],
  },
];

export default routes;
