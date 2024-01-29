import "./option-item.style.css";

import { SVGIcon } from "../../UI/icon-component/icon.component";
import correctIcon from "../../assets/images/icon-correct.svg";
import errorIcon from "../../assets/images/icon-error.svg";

interface IOptionItemComponent {
  onClick: () => void;
  value: string;
  leftIcon?: JSX.Element;
  optionLetter?: string;
  focus?: boolean;
  leftBg?: string;
  correct?: boolean;
  showResults?: boolean;
}

export const OptionItemComponent = (props: IOptionItemComponent) => {
  const {
    onClick,
    value,
    focus,
    leftIcon,
    optionLetter,
    leftBg,
    correct,
    showResults,
  } = props;
  return (
    <button
      className={`option-item-component ${
        focus ? "option-item-component--focus" : ""
      } ${correct && showResults ? "option-item-component--correct" : ""} ${
        !correct && showResults ? "option-item-component--incorrect" : ""
      } `}
      onClick={onClick}
    >
      <div className="option-item--left">
        <div
          className="option-item--left__icon bg-grey"
          style={{
            backgroundColor: leftBg,
          }}
        >
          {leftIcon ? leftIcon : <p>{optionLetter}</p>}
        </div>
        <div className="option-item--left__title">
          <p>{value}</p>
        </div>
      </div>
      <div className="answer-icon">
        {showResults && <SVGIcon icon={correct ? correctIcon : errorIcon} />}
      </div>
    </button>
  );
};
