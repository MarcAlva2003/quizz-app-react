import {
  ICategories,
  IQuizCategory,
  IQuizCategoryFormatted,
} from "../interfaces/quiz-data.interface";
import { useEffect, useState } from "react";

import accessibilityIcon from "../assets/images/icon-accessibility.svg";
import cssIcon from "../assets/images/icon-css.svg";
import { getQuizData } from "../services/quiz.service";
import htmlIcon from "../assets/images/icon-html.svg";
import jsIcon from "../assets/images/icon-js.svg";

export const useQuizData = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [quizList, setQuizList] = useState<
    IQuizCategoryFormatted[] | undefined
  >(undefined);

  const CATEGORIES_ICONS = {
    html: htmlIcon,
    css: cssIcon,
    javascript: jsIcon,
    accessibility: accessibilityIcon,
  };
  const CATEGORIES_BG = {
    html: "#FFF1E9",
    css: "#E0FDEF",
    javascript: "#EBF0FF",
    accessibility: "#F6E7FF",
  };

  const getCategotyIcon = (category: ICategories) => {
    return CATEGORIES_ICONS[category];
  };
  const getCategotyBg = (category: ICategories) => {
    return CATEGORIES_BG[category];
  };

  const data = async () => {
    setIsLoading(true);
    const data = await getQuizData();
    if (data) {
      setQuizList(
        data.map((item: IQuizCategory) => {
          const category: ICategories = item.title.toLowerCase() as ICategories;
          return {
            ...item,
            icon: getCategotyIcon(category),
            category,
            backgroundColor: getCategotyBg(category),
          };
        })
      );
    }
    setIsLoading(false);
  };

  const getQuestionsByCategory = async (category: ICategories) => {
    setIsLoading(true);
    const data = await getQuizData();
    if (data) {
      const newData = data.find((item) => {
        const itemCategory: ICategories =
          item.title.toLowerCase() as ICategories;
        return itemCategory === category;
      });
      if (!newData) {
        return;
      }
      return {
        ...newData,
        icon: getCategotyIcon(category),
        category,
        backgroundColor: getCategotyBg(category),
      };
    }
    setIsLoading(false);
  };

  useEffect(() => {
    data();
  }, []);

  return {
    quizList,
    setQuizList,
    isLoading,
    getQuestionsByCategory,
  };
};
