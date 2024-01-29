import './progress-bar.style.css'

interface IProgressBar {
  progress: number;
}

export const ProgressBar = ({progress}: IProgressBar) => {
  return (
    <div className='progress-bar-component'>
      <div className='progress-bar-progress'
        style={{
          width: `${progress}%`
        }}
      ></div>
    </div>
  )
}