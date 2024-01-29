import { Navigate, RouteObject, useRoutes } from "react-router-dom";

import { HomePage } from "../pages/home.page";
import { QuizzPage } from "../pages/quizz.page";

export interface IPublicRoutes {
  HOME: string;
  QUIZZ: string;
  QUIZZ_LINK: string;
  NOT_FOUND: string;
}

export const useAppRouter = () => {
  const publicRoutes: IPublicRoutes = {
    HOME: "/",
    QUIZZ: "/quizz/:category",
    QUIZZ_LINK: "/quizz/",
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
    {
      path: publicRoutes.NOT_FOUND,
      element: <Navigate to={publicRoutes.HOME} />,
    },
  ];

  return {
    publicRoutes,
    publicRouter: useRoutes(publicRouter),
  };
};
