import "./header.style.css";

import { CategoryTitle } from "../categoty-title/category-title.component";
import { ThemeSwitch } from "../theme-switch/theme-switch.component";
import { useQuizContext } from "../../context/quiz.context";

export const HeaderComponent = () => {
  const { categoryData } = useQuizContext();

  return (
    <header className="header-component">
      <div className="header-component-left">
        {categoryData && <CategoryTitle {...categoryData} />}
      </div>
      <div className="header-component-right">
        <ThemeSwitch />
      </div>
    </header>
  );
};
