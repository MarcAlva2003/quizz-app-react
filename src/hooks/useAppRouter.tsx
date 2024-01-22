import { RouteObject, useRoutes } from "react-router-dom";

import { HomePage } from "../pages/home.page";
import { QuizzPage } from "../pages/quizz.page";

export interface IPublicRoutes {
  HOME: string;
  QUIZZ: string;
  NOT_FOUND: string;
}

export const useAppRouter = () => {
  const publicRoutes: IPublicRoutes = {
    HOME: "/",
    QUIZZ: "/quizz/:category",
    NOT_FOUND: "*",
  };

  const publicRouter: RouteObject[] = [
    {
      path: publicRoutes.HOME,
      element: <HomePage />,
    },
    {
      path: publicRoutes.QUIZZ,
      element: <QuizzPage />,
    },
  ];

  return {
    publicRoutes,
    publicRouter: useRoutes(publicRouter),
  };
};
