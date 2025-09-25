import React, { useContext } from 'react';
import './ToggleSwitch.css';
import currentTemperatureUnitContext from '../CurrentTemperatureUnit/CurrentTemperatureUnit';

export default function ToggleSwitch(){
    const { handleToggleSwitchChange, currentTemperatureUnit } =  useContext(currentTemperatureUnitContext);
  return (
    <label className="toggle-switch">
      <input
        type="checkbox"
        id="toggle-switch"
        className="toggle-checkbox"
        checked={currentTemperatureUnit === 'F'}
        onChange={handleToggleSwitchChange}
      />

        <span className="toggle-slider">
            
        </span><span className="toggle-switch-text toggle-switch-text-F">F </span>
            <span className="toggle-switch-text toggle-switch-text-C">C</span>
      </label>
   
  );
}


