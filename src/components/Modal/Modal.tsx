import React, { FC } from 'react';
import './Modal.sass';
import { ReactSVG } from 'react-svg';
import { useKeyPress } from '../../hooks/useKeyPress';
import Input from '../Input/Input';
import ColorTheme from '../ColorTheme/ColorTheme';
import FontsTheme from '../FontsTheme/FontsTheme';
import { useAppDispatch } from '../../store/store';

import {
  setTheme,
  setCurrentFont,
} from '../../store/slice/themeSlice';

type ModalProps = {
  active: boolean;
  setmodalActive: Function;
  setActive: Function;
  pomodoro: number;
  setpomodoro: Function;
  short: number;
  setshort: Function;
  long: number;
  setlong: Function;
};

const Modal: FC<ModalProps> = ({
  active,
  setActive,
  pomodoro,
  setpomodoro,
  short,
  setmodalActive,
  setshort,
  setlong,
  long,
}) => {
  const dispatch = useAppDispatch();
  const [CurrentFontColor, setCurrentFontColor] = React.useState('Tilt');
  const [CurrentColor, setCurrentColor] = React.useState('pomodoro');
  const [inputPomodoro, setinputPomodoro] = React.useState(pomodoro);
  const [inputshort, setinputshort] = React.useState(short);
  const [inputlong, setinputlong] = React.useState(long);
  const closeModalKeyPress = useKeyPress('Escape');

  React.useEffect(() => {
    if (active === true) {
      setActive(!closeModalKeyPress);
    }
  }, [closeModalKeyPress]);

  const applyingСhanges = (e: React.FormEvent) => {
    e.preventDefault();
    setmodalActive(false);
    setpomodoro(inputPomodoro);
    setshort(inputshort);
    setlong(inputlong);
    dispatch(setTheme(CurrentColor));
    dispatch(setCurrentFont(CurrentFontColor));
  };

  const DataCurrentFont = (value: string) => {
    setCurrentFontColor(value);
  };

  const DataColor = (value: string) => {
    setCurrentColor(value);
  };
  const onChangeTime = (value: number) => {
    setinputPomodoro(value);
  };
  const onChangeTime1 = (value: number) => {
    setinputshort(value);
  };
  const onChangeTime2 = (value: number) => {
    setinputlong(value);
  };

  return (
    <div
      className={active ? 'modal active' : 'modal'}
      onClick={() => setActive(false)}
    >
      <form onSubmit={applyingСhanges} noValidate action="">
        <div
          className="modal__content"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal__haeder">
            <div className="modal__container">
              <div className="modal__header-content">
                <p className="modal__title">Settings</p>
                <button
                  onClick={() => setActive(false)}
                  className="modal__close"
                >
                  <ReactSVG src="close.svg" />
                </button>
              </div>
            </div>
          </div>
          <div className="modal__container">
            <div>TIME (MINUTES)</div>

            <div className="modal__main">
              <div className="modal__input">
                <p>pomodoro</p>
                <Input
                  onChange={onChangeTime}
                  value={inputPomodoro}
                />
              </div>
              <div className="modal__input">
                <p>short break</p>
                <Input onChange={onChangeTime1} value={inputshort} />
              </div>
              <div className="modal__input">
                <p>long break</p>
                <Input onChange={onChangeTime2} value={inputlong} />
              </div>
            </div>

            <div className="modal__content-setting">
              <p>Font</p>
              <FontsTheme DataCurrentFont={DataCurrentFont} />
            </div>
            <div className="modal__content-setting">
              <p>Color</p>
              <ColorTheme DataColor={DataColor} />
            </div>
          </div>
          <button
            onClick={applyingСhanges}
            type="submit"
            className="save-setting"
          >
            Apply
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
