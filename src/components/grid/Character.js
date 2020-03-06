import React from 'react';

import character from "../../assets/character.png"

import './character.styles.scss';

const Character = (props) =>  {
  const STEP = 40;
  let {dx, dy} = props;

  dx = 2 * dx * STEP;
  dy = 2 * dy * STEP;

  return (
    <div className="character">
      <img
          src={character}
          key="key"
          alt="character"
          style={{ top: dy + 'px', left: dx + 'px'}}
          >
      </img>
    </div>
    )
}

export default Character;
