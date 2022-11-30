import { useState } from 'react';
import bird from './assets/svg/bird.svg';
import cat from './assets/svg/cat.svg';
import cow from './assets/svg/cow.svg';
import dog from './assets/svg/dog.svg';
import gator from './assets/svg/gator.svg';
import heart from './assets/svg/heart.svg';
import horse from './assets/svg/horse.svg';
import './AnimalShow.css';

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

function AnimalShow({ type }) {
  const [click, setClick] = useState(0);

  function handleClick() {
    setClick(click + 1);
  }
  return (
    <div onClick={handleClick} className="animal-show">
      <img className="animal" alt="animal" src={svgMap[type]} />
      <img className="heart" alt="heart" src={heart} style={{ width: 10 + 10 * click + 'px' }} />
    </div>
  );
}

export default AnimalShow;
