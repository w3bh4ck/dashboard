import { createBrowserRouter, RouteObject } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Transactions from "../pages/Transactions";

const routerConfig: RouteObject[] = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/transactions",
    element: <Transactions />,
  },
];

export const router = createBrowserRouter(routerConfig);
