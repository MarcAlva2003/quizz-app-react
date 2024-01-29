import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

import { IQuizCategoryFormatted } from "../interfaces/quiz-data.interface";

interface IQuizContext {
  categoryData: IQuizCategoryFormatted | undefined;
  setCategoryData: Dispatch<SetStateAction<IQuizCategoryFormatted | undefined>>;
}

const QuizContext = createContext<IQuizContext>({
  categoryData: undefined,
  setCategoryData: () => {},
});

export const QuizContextProvider = ({ children }: any) => {
  const [categoryData, setCategoryData] = useState<
    IQuizCategoryFormatted | undefined
  >(undefined);

  return (
    <QuizContext.Provider value={{ categoryData, setCategoryData }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => useContext(QuizContext);