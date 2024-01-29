import "./quiz.style.css";

import {
  ICategories,
  IQuizQuestion,
} from "../../interfaces/quiz-data.interface";
import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Button } from "../../UI/button/button.component";
import { CategoryTitle } from "../../components/categoty-title/category-title.component";
import { OptionItemComponent } from "../../components/option-item/option-item.component";
import { ProgressBar } from "../../UI/progress-bar/progress-bar.component";
import { useQuizContext } from "../../context/quiz.context";
import { useQuizData } from "../../hooks/useQuizData";

export interface IQuizQuestionFormatted {
  question: string;
  options: { title: string; isCorrect: boolean }[];
}

export const QuizModule = () => {
  const { categoryData, setCategoryData } = useQuizContext();
  const [questions, setQuestions] = useState<IQuizQuestion[] | undefined>(
    undefined
  );
  const [step, setStep] = useState<number>(0);
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);
  const [answerSubmited, setAnswerSubmited] = useState<boolean>(false);
  const [points, setPoints] = useState<number>(0);
  const [focusOption, setFocusOption] = useState<number>(-1);
  const { category } = useParams();
  const { getQuestionsByCategory } = useQuizData();

  const currentCuestion: IQuizQuestionFormatted | undefined = useMemo(() => {
    if (!questions) {
      return;
    }
    const current = questions[step];
    if (!current) return undefined;
    return {
      question: current.question,
      options: current.options.map((item: string) => {
        return {
          title: item,
          isCorrect: current.answer === item,
        };
      }),
    };
  }, [questions, step]);

  const onSelectOption = (option: number) => {
    setFocusOption(option);
  };

  const handleNextStep = () => {
    if (!questions) return;
    if (step + 1 < questions.length) {
      setAnswerSubmited(false);
      setFocusOption(-1);
      setStep(step + 1);
    } else {
      setQuizCompleted(true);
    }
  };
  const handleSumitAnswer = () => {
    if (!currentCuestion) return;
    const answerCorrect = currentCuestion.options[focusOption].isCorrect;
    setAnswerSubmited(true);
    answerCorrect && setPoints(points + 1);
  };

  const handleSumit = () => {
    answerSubmited ? handleNextStep() : handleSumitAnswer();
  };
  const navigate = useNavigate();

  const handlePlayAgain = () => {
    navigate("/");
  };

  useEffect(() => {
    if (!categoryData) {
      return;
    }
    setQuestions(categoryData.questions);
  }, [categoryData]);

  const getCategory = async () => {
    const selectedCatedoty = await getQuestionsByCategory(
      category as ICategories
    );
    selectedCatedoty && setCategoryData(selectedCatedoty);
  };

  const submitBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    getCategory();
    return () => {
      setCategoryData(undefined);
    };
  }, [category]);

  useEffect(() => {
    if (!submitBtnRef.current) {
      return;
    }
    if (answerSubmited || focusOption >= 0 || quizCompleted) {
      submitBtnRef.current.focus()
    }
  }, [answerSubmited, focusOption, quizCompleted])

  return quizCompleted ? (
    <section className="score-show">
      <div className="score-left">
        <h1 className="score-left--title">
          Quiz Completed <br />
          <b>You scored...</b>
        </h1>
      </div>
      <div className="score-right">
        <div className="score-right--container">
          <div className="score-right--container__category">
            {categoryData && <CategoryTitle {...categoryData} />}
          </div>
          <div className="score-right--container__points">
            <h2>{points}</h2>
          </div>
          <div className="score-right--container__length">
            out of {questions?.length}
          </div>
        </div>
        <div className="score-right--button">
          <Button onClick={handlePlayAgain} text="Play Again" />
        </div>
      </div>
    </section>
  ) : currentCuestion && questions ? (
    <section className="question-container">
      <div className="question-left">
        <div className="question-left--text">
          <p>
            Question {step + 1} of {questions.length}
          </p>
          <h2>{currentCuestion.question}</h2>
        </div>
        <div className="question-left--progress">
          <ProgressBar progress={(step * 100) / questions.length} />
        </div>
      </div>
      <div className="question-right">
        <div className="question-right--options">
          {currentCuestion.options.map((item, index: number) => (
            <OptionItemComponent
              onClick={() => {
                !answerSubmited && onSelectOption(index);
              }}
              value={item.title}
              optionLetter={(index + 10).toString(36).toUpperCase()}
              focus={index === focusOption}
              correct={item.isCorrect}
              showResults={
                answerSubmited && (item.isCorrect || index === focusOption)
              }
            />
          ))}
        </div>
        <div className="question-right--submit">
          <Button
            onClick={handleSumit}
            disabled={!answerSubmited && focusOption < 0}
            text={answerSubmited ? "Next Question" : "Submit"}
            ref={submitBtnRef}
          />
        </div>
      </div>
    </section>
  ) : (
    <div>Loading</div>
  );
};
