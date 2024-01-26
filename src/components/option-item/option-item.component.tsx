import "./option-item.style.css";

interface IOptionItemComponent {
  onClick: () => void;
  value: string;
  leftIcon?: JSX.Element;
  optionLetter?: string;
  focus?: boolean;
  leftBg?: string;
}

export const OptionItemComponent = (props: IOptionItemComponent) => {
  const { onClick, value, focus, leftIcon, optionLetter, leftBg } = props;
  return (
    <button className={`option-item-component ${focus ? 'option-item-component--focus' : ''}`} onClick={onClick}>
      <div
        className="option-item--left bg-grey"
        style={{
          backgroundColor: leftBg,
        }}
      >
        {leftIcon ? leftIcon : <p>{optionLetter}</p>}
      </div>
      <div className="option-item--title">
        <p>{value}</p>
      </div>
    </button>
  );
};
