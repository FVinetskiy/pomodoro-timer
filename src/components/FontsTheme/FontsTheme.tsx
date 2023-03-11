import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../store/slice/themeSlice';

const FontsTheme = ({
  DataCurrentFont,
}: any) => {
  const { CurrentFont } = useSelector(selectTheme);

  React.useLayoutEffect(() => {
    document.documentElement.setAttribute('data-fonts', CurrentFont);
  }, [CurrentFont]);

  const [FontButton, setFontButton] = React.useState([
    { id: 0, status: true, font: 'Tilt' },
    { id: 1, status: false, font: 'Climate' },
    { id: 2, status: false, font: 'Dancing Script' },
  ]);

  const toggleFont = (id: number, font: string, e: any) => {
    e.preventDefault();
    const newFontArr = FontButton.map((item) =>
      item.id === id
        ? { ...item, status: true }
        : { ...item, status: false }
    );
    setFontButton(newFontArr);
    DataCurrentFont(font);
  };

  return (
    <div className="modal__wrapper-button">
      {FontButton.map((i) => (
        <button
          onClick={(e) => toggleFont(i.id, i.font, e)}
          className={
            i.status
              ? 'modal__button-text active'
              : 'modal__button-text'
          }
          key={i.id}
        >
          Aa
        </button>
      ))}
    </div>
  );
};

export default FontsTheme;
