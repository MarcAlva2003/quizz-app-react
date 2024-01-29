import "./home.style.css";

import { IQuizCategoryFormatted } from "../../interfaces/quiz-data.interface";
import { OptionItemComponent } from "../../components/option-item/option-item.component";
import { SVGIcon } from "../../UI/icon-component/icon.component";
import { useAppRouter } from "../../hooks/useAppRouter";
import { useNavigate } from "react-router-dom";
import { useQuizData } from "../../hooks/useQuizData";

export const HomeModule = () => {
  const { quizList } = useQuizData();
  const { publicRoutes } = useAppRouter();
  const navigate = useNavigate();
  return (
    <div className="home-screen-container">
      <section className="home-text">
        <div className="home-title">
          <h1>
            Welcome to the <br />
            <span>Frontend Quiz</span>
          </h1>
        </div>
        <div className="home-subtitle">
          <p>Pick a subject to get started.</p>
        </div>
      </section>
      <section className="home-quiz-categories">
        {quizList &&
          quizList.map((item: IQuizCategoryFormatted) => (
            <OptionItemComponent
              onClick={() => {
                navigate(`${publicRoutes.QUIZZ_LINK}${item.category}`);
              }}
              value={item.title}
              leftIcon={<SVGIcon icon={item.icon} />}
              leftBg={item.backgroundColor}
            />
          ))}
      </section>
    </div>
  );
};
