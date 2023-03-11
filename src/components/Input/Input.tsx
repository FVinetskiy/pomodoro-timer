import React from 'react';
import './Input.sass';
import { ReactSVG } from 'react-svg';

type propsInput = {
  value: number;
  onChange: Function;
};

const Input: React.FC<propsInput> = ({ value, onChange }) => {
  const [valueCol, setValue] = React.useState(value);

  const mainonChange = (e: any) => {
    const result = e.target.value;
    setValue(result);
    onChange(result);
  };

  const upValue = (e: any) => {
    const result = Number(valueCol) + 1;
    e.preventDefault();
    setValue(result);
    onChange(result);
  };

  const downValue = (e: any) => {
    const result = Number(valueCol) - 1;
    e.preventDefault();
    setValue(result);
    onChange(result);
  };

  return (
    <div className="custom-input">
      <input
        className="custom-input__input"
        value={valueCol}
        type="number"
        onChange={(e) => mainonChange(e)}
      />
      <div className="custom-input__wrap-button">
        <button onClick={upValue} className="custom-input__button">
          <ReactSVG src="up.svg" />
        </button>
        <button
          disabled={valueCol === 0}
          onClick={downValue}
          className="custom-input__button"
        >
          <ReactSVG src="down.svg" />
        </button>
      </div>
    </div>
  );
};

export default Input;
