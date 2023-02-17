import React from 'react';
import {SuperSlideMe} from 'react-super-slide-me';
import {Link} from 'react-router-dom';

interface Props {
  id: string,
  levels?: string[] | undefined,
}

const GamePage = (props: Props) => {
  let customLevels = props.levels ? props.levels : undefined;

  return (
    <>
      <Link to="/"><div className="backArrow">← Back</div></Link>
      <div className="gameContainer">
        <SuperSlideMe
          id={props.id}
          customLevels={customLevels}
          levelConfig={{ levelFilter: customLevels ? "onlyCustom" : "all" }}
        />
      </div>
    </>
  )
};

export default GamePage;