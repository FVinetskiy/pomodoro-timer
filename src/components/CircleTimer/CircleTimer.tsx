import './CircleTimer.sass';
import React, { useEffect } from 'react';

import 'react-circular-progressbar/dist/styles.css';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';

type IcircleType = {
  play: boolean;
  setPlay: Function;
  activetag: number;
  initTime: number;
  setInittime: Function;
  Time: number;
};

const CircleTimer: React.FC<IcircleType> = ({
  initTime,
  Time,
  play,
  setInittime,
  setPlay,
}) => {
  const [curent, setcurent] = React.useState(initTime);

  const togglePlay = () => {
    setPlay(!play);
  };

  const getTime = (ss: number) => {
    const minutes = Math.floor(ss / 60);
    const seconds = ss - minutes * 60;
    const result = `${minutes < 10 ? '0' + minutes : minutes}:${
      seconds < 10 ? '0' + seconds : seconds
    }`;
    return result;
  };

  useEffect(() => {
    if (play && initTime > 0) {
      const interval = setInterval(() => {
        setInittime((initTime: number) => initTime - 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
    setcurent(initTime);
  }, [initTime, play]);

  const restart = () => {
    setInittime(Time);
  };

  return (
    <div className="circle">
      <div className="circle__content">
        <CircularProgressbarWithChildren
          strokeWidth={2}
          value={initTime}
          maxValue={curent}
          styles={buildStyles({
            pathColor: `var(--mainElements)`,
          })}
        >
          <div className="timer">
            <p className="timer__value">{getTime(initTime)}</p>
            <button
              disabled={initTime === 0}
              onClick={togglePlay}
              className="timer__button"
            >
              {play ? 'stop' : 'start'}
            </button>
            {initTime === 0 ? (
              <button className="timer__restart" onClick={restart}>
                restart
              </button>
            ) : null}
          </div>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );
};

export default CircleTimer;
