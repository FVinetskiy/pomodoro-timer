import React from 'react';
import './ListButton.sass';

type ListButtonProps = {
  setactivetag: Function,
  activetag: number,
  setPlay: Function,
};

const ListButton: React.FC<ListButtonProps> = ({
  setactivetag,
  activetag,
  setPlay,
}) => {
  const arrTag = ['pomodoro', 'short break', 'long break'];

  const handleClick = (index:number) => {
    setactivetag(index);
    setPlay(false);
  };

  return (
    <div className="list-button">
      {arrTag.map((item, i) => (
        <button
          onClick={() => handleClick(i)}
          key={i}
          className={
            activetag === i
              ? 'list-button__button active'
              : 'list-button__button'
          }
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default ListButton;
