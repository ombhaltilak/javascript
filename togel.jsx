import { useState } from "react";
import "./togel.css";

export const TogelSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  const toggleClass = isOn ? "On" : "Off";

  return (
    <div className="toggle-switch" onClick={handleToggle}>
      <div className={`switch ${toggleClass}`}>
        <span className={`switch-state ${toggleClass}`}>{isOn ? "On" : "Off"}</span>
      </div>
    </div>
  );
};