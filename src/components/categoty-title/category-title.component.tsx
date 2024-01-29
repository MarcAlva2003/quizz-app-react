import './category-title.style.css'

import { SVGIcon } from '../../UI/icon-component/icon.component';

interface ICategoryTitle {
  title: string;
  icon: string;
  backgroundColor: string;
}

export const CategoryTitle = (props: ICategoryTitle) => {
  const {backgroundColor,icon,title} = props;
  return (
    <div className='category-title-component'>
      <div className='category-title-icon' style={{backgroundColor: backgroundColor}}>
        <SVGIcon icon={icon} />
      </div>
      <div className='category-title-title'>
        <h2>{title}</h2>
      </div>
    </div>
  )
}