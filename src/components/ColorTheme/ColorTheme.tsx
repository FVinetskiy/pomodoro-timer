import React, { FC } from 'react';
import { ReactSVG } from 'react-svg';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../store/slice/themeSlice';

type PropsColorTheme = {
  DataColor: Function;
};

const ColorTheme: FC<PropsColorTheme> = ({ DataColor }) => {
  const { theme } = useSelector(selectTheme);

  React.useLayoutEffect(() => {
    document.documentElement.setAttribute('data-sheme', theme);
  }, [theme]);

  const [ColorButton, setColorButton] = React.useState([
    { id: 0, status: true, color: 'pomodoro' },
    { id: 1, status: false, color: 'shortbreak' },
    { id: 2, status: false, color: 'longbreak' },
  ]);

  const toggleСolor = (
    id: number,
    color: string,
    e: React.SyntheticEvent
  ) => {
    e.preventDefault();
    const newArr = ColorButton.map((item) =>
      item.id === id
        ? { ...item, status: true }
        : { ...item, status: false }
    );
    setColorButton(newArr);
    DataColor(color);
  };

  return (
    <div className="modal__wrapper-button">
      {ColorButton.map((i) => (
        <button
          onClick={(e) => toggleСolor(i.id, i.color, e)}
          key={i.id}
          id={`${i.id}`}
          className={`modal__button-color + ${i.color}`}
        >
          {i.status ? <ReactSVG src="check.svg" /> : ''}
        </button>
      ))}
    </div>
  );
};

export default ColorTheme;
