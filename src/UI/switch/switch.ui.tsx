import "./switch.style.css";

import React, { useEffect, useState } from "react";

interface ISwitchUI {
  isChecked?: boolean;
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SwitchUI = (props: ISwitchUI) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  useEffect(() => {
    props.isChecked !== undefined && setIsChecked(props.isChecked);
  }, [props.isChecked]);

  const handleSwitch = (ev: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props.onChange(ev);
      return;
    }
    setIsChecked(ev.target.checked);
  };

  return (
    <div
      className={`switch-ui-component ${
        isChecked ? "switch-ui-component--active" : ""
      }`}
    >
      <input
        onChange={handleSwitch}
        type="checkbox"
        className="switch-ui-input"
      />
      <div className="switch-ui-ellipse"></div>
    </div>
  );
};
