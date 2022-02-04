import React from "react";
import PropTypes from "prop-types";
import './ToggleSwitch.scss';

/*
Toggle Switch Component
Note: id, checked and onChange are required for ToggleSwitch component to function.
The props name, small, disabled and optionLabels are optional.
Usage: <ToggleSwitch id="id" checked={value} onChange={checked => setValue(checked)}} />
*/

const ToggleSwitch = ({ id, name, checked, onChange, optionLabels, small, disabled }) => {

      function handleKeyPress(e) {
        //makes sure the toggle switch won't be changed by inputs other than the spacebar
        if (e.keyCode !== 32) return;
        //prevents the browsers default action for the spacebar
        e.preventDefault();
        onChange(!checked)
    }

  return (
    /*div className will change depending if property "small" is set to true or not*/
    <div className={"toggle-switch" + (small ? " small-switch" : "")}>
      {/*Sets attributes for actual switch input*/}
      <input
        type="checkbox"
        className="toggle-switch-checkbox"
        id={id}
        name={name}
        //holds current state of toggle switch
        checked={checked}
        onChange={e => onChange(e.target.checked)}
        disabled={disabled}
        />
        {/*Ternary operator that will only generate toggle switch if required id value is passed*/}
        {/*Ternary operator = { condition ? (value if true) : (value if false)*/}
        {id ? (
          <label className="toggle-switch-label" 
            htmlFor={id}
            //Sets if the switch can be focused with tab>
            tabIndex = {disabled ? -1 : 1 }
            //can change the toggle switch by pressing space when it's in focus (i.e. clicked)
            onKeyDown = {e => handleKeyPress(e) }>
            {/*Will change the className depending if the span is disabled or not*/}
            {/*inner part of switch with the text 'yes' or 'no'*/}
            <span
              className={
                disabled
                  ? "toggle-switch-inner toggle-switch-disabled"
                  : "toggle-switch-inner"
              }
              /*sets custom data-* attr that can be used by the css*/
              data-yes={optionLabels[0]}
              data-no={optionLabels[1]}
              tabIndex = {-1}
            />
            {/*white round 'slider' in switch*/}
            <span
              className={
              disabled
                ? "toggle-switch-switch toggle-switch-disabled"
                : "toggle-switch-switch"
              }
              tabIndex = {-1}
            />
          </label>
        ) : null}
      </div>
    );
}

// Set text for when switch is 'on' or 'off'
ToggleSwitch.defaultProps = {
  optionLabels: ["Yes", "No"],
};

//type checking with propTypes property to define required properties and the value types for each property
ToggleSwitch.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  optionLabels: PropTypes.array,
  small: PropTypes.bool,
  disabled: PropTypes.bool
};

export default ToggleSwitch;
