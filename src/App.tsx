import { ReactSVG } from 'react-svg';
import ListButton from './components/ListButton/ListButton';
import Modal from './components/Modal/Modal';
import React, { FC } from 'react';
import CircleTimer from './components/CircleTimer/CircleTimer';

const App:FC = () => {
  const [modalActive, setmodalActive] = React.useState(false);
  const [play, setPlay] = React.useState<boolean>(false);
  const [activetag, setactivetag] = React.useState(0);
  const [pomodoro, setpomodoro] = React.useState<number>(11);
  const [short, setshort] = React.useState<number>(21);
  const [long, setlong] = React.useState<number>(30);
  const [initTime, setInittime] = React.useState(0);
  const [Time, setTime] = React.useState(0);

  React.useEffect(() => {
    switch (activetag) {
      case 0:
        setInittime(pomodoro);
        setTime(pomodoro);
        break;
      case 1:
        setInittime(short);
        setTime(short);
        break;
      case 2:
        setInittime(long);
        setTime(long);
        break;
      default:
        break;
    }
  }, [activetag, pomodoro, short, long]);

  return (
    <div className="app">
      <header>
        <ListButton
          activetag={activetag}
          setactivetag={setactivetag}
          setPlay={setPlay}
        />
      </header>
      <div className="circleWrapper">
        <CircleTimer
          play={play}
          setPlay={setPlay}
          activetag={activetag}
          initTime={initTime}
          setInittime={setInittime}
          Time={Time}
        />
      </div>

      <button
        onClick={() => setmodalActive(true)}
        className="button-setting"
      >
        <ReactSVG src="setting.svg" />
      </button>
      <Modal
        active={modalActive}
        setActive={setmodalActive}
        pomodoro={pomodoro}
        setpomodoro={setpomodoro}
        short={short}
        setshort={setshort}
        long={long}
        setlong={setlong}
        setmodalActive={setmodalActive}
      />
    </div>
  );
}

export default App;
