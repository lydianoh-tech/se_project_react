import React, { useContext } from 'react';
import './ToggleSwitch.css';
import currentTemperatureUnitContext from '../currentTemperatureUnit/currentTemperatureUnit';

export default function ToggleSwitch(){
    const { handleToggleSwitchChange, currentTemperatureUnit } =  useContext(currentTemperatureUnitContext);
  return (
    <label className="toggle-switch">
      <input
        type="checkbox"
        id="toggle"
        className="toggle-checkbox"
        checked={currentTemperatureUnit === 'F'}
        onChange={handleToggleSwitchChange}
      />

        <span className="toggle-slider">
            <span className="toggle-switch-text toggle-switch-text-F">F </span>
            <span className="toggle-switch-text toggle-switch-text-C">C</span>
        </span>
      </label>
   
  );
}
export { ToggleSwitch };
