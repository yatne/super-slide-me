import React from 'react';
import {SuperSlideMe} from 'react-super-slide-me';
import {Link} from 'react-router-dom';

interface Props {
  id: string,
  levels?: string[] | undefined,
}

const GamePage = (props: Props) => {
  console.log(props)
  return (
    <>
      <Link to="/"><div className="backArrow">Back</div></Link>
      <div className="gameContainer">
        <SuperSlideMe
          id={props.id}
          customLevels={props.levels ? props.levels : undefined}
          levelConfig={{ levelFilter: props.levels ? "onlyCustom" : "all" }}
        />
      </div>
    </>
  )
};

export default GamePage;