import React, {useState} from 'react';
import {SuperSlideMe} from 'react-super-slide-me';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router';
import blockLevelsConfig from './levels/blocksLevels';

interface Props {
  id: string,
  levels?: string[] | undefined,
}

const GamePage = (props: Props) => {
  const {blockId} = useParams();
  let customLevels = props.levels ? props.levels : undefined;
  if (blockId) {
    customLevels = blockLevelsConfig[parseInt(blockId)].levels;
  }
  const [blockIdState, setBlockIdState] = useState(blockId)

  return (
    <>
      <Link to="/"><div className="backArrow">← Back</div></Link>
      {blockId && parseInt(blockId) > 0 && <Link to={`/blocks/${parseInt(blockId) - 1}`}>Previous</Link>}
      {blockId && <div>{blockLevelsConfig[parseInt(blockId)].label}</div>}
      <div className="gameContainer">
        <SuperSlideMe
          id={props.id + blockId}
          customLevels={customLevels}
          levelConfig={{ levelFilter: customLevels ? "onlyCustom" : "all" }}
        />
      </div>
      {blockIdState &&
        <button onClick={() => setBlockIdState(blockIdState + 1)}> next </button>
      }
      {blockId && parseInt(blockId) < 1 && <Link to={`/blocks/${parseInt(blockId) + 1}`}>Next</Link>}
    </>
  )
};

export default GamePage;