import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import "./ToggleSwitch.css";

export default function ToggleSwitch() {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );
  return (
    <label className="toggle__switch">
      <input
        onChange={handleToggleSwitchChange}
        type="checkbox"
        className="toggle__switch-checkbox"
      />
      <span className="toggle__switch-circle"></span>
      <span
        className={`toggle__switch-text toggle__switch-text--F ${
          currentTemperatureUnit === "F" ? "toggle__switch-text--color" : ""
        }`}
      >
        F
      </span>
      <span
        className={`toggle__switch-text toggle__switch-text--C ${
          currentTemperatureUnit === "C" ? "toggle__switch-text--color" : ""
        }`}
      >
        C
      </span>
    </label>
  );
}
