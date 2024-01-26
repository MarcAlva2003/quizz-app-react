import './icons.style.css'

import { ReactSVG } from "react-svg";

interface IIconComponent {
  icon: string;
  stroke?: string;
  fill?: string;
  size?: string;
  width?: string;
  height?: string;
}

export const SVGIcon = (props: IIconComponent) => {
  const { icon, fill, size, stroke, height, width } = props;
  return (
    <div
      className="icon-component-container"
      style={{ width: width ?? size ?? "", height: height ?? size ?? "" }}
    >
      <ReactSVG
        src={icon}
        fill={fill}
        stroke={stroke}
        className="icon-component-icon"
      />
    </div>
  );
};
