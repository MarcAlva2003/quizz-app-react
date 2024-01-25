import "./header.style.css";

import { ThemeSwitch } from "../theme-switch/theme-switch.component";

export const HeaderComponent = () => {
  return (
    <header className="header-component">
      <div className="header-component-left"></div>
      <div className="header-component-right">
        <ThemeSwitch />
      </div>
    </header>
  );
};
