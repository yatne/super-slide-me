import * as React from 'react';
import {Link} from 'react-router-dom';
import {SuperSlideMe} from 'react-super-slide-me';
import {useState} from 'react';
import {
  blueBallLevels, blueBoxLevels,
  boxLevels,
  greenFieldLevels,
  orangeWallLevels,
  pinkBallLevels,
  redFieldLevels
} from '../levels/blocksLevels';

export interface blocksLevelConfig {
  description: string | JSX.Element,
  rssm: JSX.Element,
}

const config: blocksLevelConfig[] = [
  {
    description: (
      <>
        <p>
          The goal of the game is to deliver
          <span style={{color: '#2e57dc'}}> blue ball</span> to it's
          <span style={{color: '#2e57dc'}}> blue square</span>.
        </p>
        <p>
          The ball moves until it reaches the edge of the level or a
          <span style={{color: '#484848'}}> wall block</span>.
        </p>
        <p>
          In some levels, there may be more than one ball.
        </p>
      </>
    ),
    rssm: <SuperSlideMe id="blueball" levelConfig={{ levelFilter:"onlyCustom"}} customLevels={blueBallLevels} />
  },
  {
    description: (
      <>
        <p>
          <span style={{color: '#7a4600'}}>Boxes</span> move together with balls.
        </p>
      </>
    ),
    rssm: <SuperSlideMe id="box" levelConfig={{ levelFilter:"onlyCustom"}} customLevels={boxLevels} />
  },
  {
    description: (
      <>
        <p>
          <span style={{color: '#ccffc5'}}>Green fields </span>
          change into <span style={{color: '#2e7200'}}> walls</span> when something goes through them.
        </p>
      </>
    ),
    rssm: <SuperSlideMe id="sasbox" levelConfig={{ levelFilter:"onlyCustom"}} customLevels={greenFieldLevels} />
  },
  {
    description: (
      <>
        <p>
          On some levels there are <span style={{color: '#dc2ed9'}}>Pink balls</span>.
        </p>
        <p>
          They behave the same way as <span style={{color: '#2e57dc'}}>blue ones</span> but they need to be placed in
          <span style={{color: '#dc2ed9'}}>pink squares</span>.
        </p>
      </>
    ),
    rssm: <SuperSlideMe id="asda" levelConfig={{ levelFilter:"onlyCustom"}} customLevels={pinkBallLevels} />
  },
  {
    description: (
      <>
        <p>
          <span style={{color: 'rgba(250,0,0,0.75)'}}>Red fields</span> destroy any object that enters it and then became
          <span style={{color: '#ffc5c5'}}> deactivated</span>.
        </p>
      </>
    ),
    rssm: <SuperSlideMe id="red" levelConfig={{ levelFilter:"onlyCustom"}} customLevels={redFieldLevels} />
  },
  {
    description: (
      <>
        <p>
          <span style={{color: '#e7a600'}}>Orange walls</span> can be destroyed only by a
          <span style={{color: '#e7a600'}}> crushing</span> <span style={{color: '#484848'}}>ball</span>.
        </p>
      </>
    ),
    rssm: <SuperSlideMe id="orange" levelConfig={{ levelFilter:"onlyCustom"}} customLevels={orangeWallLevels} />
  },
  {
    description: (
      <>
        <p>
          <span style={{color: '#06525e'}}>Blue boxes</span> move only on the
          <span style={{color: '#11ddff'}}> blue fields</span>.
        </p>
      </>
    ),
    rssm: <SuperSlideMe id="bluebox" levelConfig={{ levelFilter:"onlyCustom"}} customLevels={blueBoxLevels} />
  },
]

const BlocksPage = () => {
  const [selectedConfig, setSelectedConfig] = useState(0);

  return (
    <div className="blocksDescriptionApp">
      <Link to="/"><div className="backArrow">← Back</div></Link>
      <button className={`navButton ${selectedConfig <= 0 ? 'hidden' : ''}`} onClick={() => setSelectedConfig(selectedConfig - 1)}> previous </button>
      <div className="blocksDescriptionGame">
        {config.map((gameConfig, index) => (
          <div className={`${index !== selectedConfig ? 'hidden' : ''}`}>
            <div>{gameConfig.description}</div>
            {gameConfig.rssm}
          </div>
        ))}
      </div>
      <button className={`navButton ${selectedConfig >= config.length - 1 ? 'hidden' : ''}`} onClick={() => setSelectedConfig(selectedConfig + 1)}> next </button>
    </div>
  )
};

export default BlocksPage;
