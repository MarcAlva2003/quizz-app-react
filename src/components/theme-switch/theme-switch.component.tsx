import "./theme-switch.style.css";

import { SVGIcon } from "../../UI/icon-component/icon.component";
import { SwitchUI } from "../../UI/switch/switch.ui";
import iconMoonDark from "../../assets/images/icon-moon-dark.svg";
import iconMoonLight from "../../assets/images/icon-moon-light.svg";
import iconSunDark from "../../assets/images/icon-sun-dark.svg";
import iconSunLight from "../../assets/images/icon-sun-light.svg";
import { useAppTheme } from "../../hooks/useAppTheme";

export const ThemeSwitch = () => {
  const { handleSwitchTheme, isDarkMode } = useAppTheme();
  return (
    <div className="theme-switch-component">
      <div className="theme-switch-icon">
         <SVGIcon icon={!isDarkMode ? iconSunDark : iconSunLight}/>
      </div>
      <div className="theme-switch-switch">
        <SwitchUI isChecked={isDarkMode} onChange={handleSwitchTheme} />
      </div>
      <div className="theme-switch-icon">
         <SVGIcon icon={!isDarkMode ? iconMoonDark : iconMoonLight}/>
      </div>
    </div>
  );
};
