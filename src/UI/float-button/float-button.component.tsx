import './float-button.style.css'

interface IFloatButton {
  onClick: (ev: React.MouseEvent<HTMLButtonElement>) => void
}

export const FloatButton = (props: IFloatButton) => {
  const {onClick} = props;
  return (
    <button className='float-button-component' onClick={onClick}>
      <p>?</p>
    </button>
  )
}