import "./home.style.css";

import { IQuizCategoryFormatted } from "../interfaces/quiz-data.interface";
import { OptionItemComponent } from "../components/option-item/option-item.component";
import { SVGIcon } from "../UI/icon-component/icon.component";
import { useQuizData } from "../hooks/useQuizData";

export const HomeModule = () => {
  const { quizList } = useQuizData();

  return (
    <div className="home-container">
      <div className="home-title">
        <h1>
          Welcome to the <br />
          <span>Frontend Quiz</span>
        </h1>
      </div>
      <div className="home-subtitle">
        <p>Pick a subject to get started.</p>
      </div>
      <div className="home-quiz-categories">
        {quizList &&
          quizList.map((item: IQuizCategoryFormatted) => (
            <OptionItemComponent
              onClick={() => {}}
              value={item.title}
              leftIcon={<SVGIcon icon={item.icon} />}
              leftBg={item.backgroundColor}
            />
          ))}
      </div>
    </div>
  );
};
