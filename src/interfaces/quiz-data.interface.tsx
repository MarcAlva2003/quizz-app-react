export interface IQuizQuestion {
  question: string;
  options: string[];
  answer: string;
}

export interface IQuizCategory {
  title: string;
  icon: string;
  questions: IQuizQuestion[]
}

export type ICategories = "html" | "css" | "javascript" | "accessibility";

export interface IQuizCategoryFormatted extends IQuizCategory {
  category: ICategories;
  backgroundColor: string;
}