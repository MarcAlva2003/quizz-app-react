import { IQuizCategory } from "../interfaces/quiz-data.interface";

export const getQuizData = async () => {
  try {
    const data: IQuizCategory[] = await import("../assets/data.json").then(
      (res) => res.default.quizzes
    );
    if (!data) {
      return [];
    }
    return data;
  } catch (err) {
    return undefined;
  }
};
