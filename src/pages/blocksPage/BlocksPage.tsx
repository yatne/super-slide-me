import * as React from 'react';
import {Link} from 'react-router-dom';
import {SuperSlideMe} from 'react-super-slide-me';
import {useState} from 'react';
import {blueBallLevels, boxLevels} from '../levels/blocksLevels';
import {babyLevels} from '../levels/babyLevels';

export interface blocksLevelConfig {
  description: string | JSX.Element,
  rssm: JSX.Element,
}

const config: blocksLevelConfig[] = [
  {
    description: "Blue ball is super",
    rssm: <SuperSlideMe id="blueball" levelConfig={{ levelFilter:"onlyCustom"}} customLevels={blueBallLevels} />
  },
  {
    description: "Box level",
    rssm: <SuperSlideMe id="box" levelConfig={{ levelFilter:"onlyCustom"}} customLevels={boxLevels} />
  },
  {
    description: "Next level",
    rssm: <SuperSlideMe id="sasbox" levelConfig={{ levelFilter:"onlyCustom"}} customLevels={babyLevels} />
  },
]

const BlocksPage = () => {
  const [selectedConfig, setSelectedConfig] = useState(0)

  return (
    <>
      <Link to="/"><div className="backArrow">← Back</div></Link>
      {selectedConfig > 0 &&
        <button className="previousButton navButton" onClick={() => setSelectedConfig(selectedConfig - 1)}> previous </button>
      }
      {config.map((gameConfig, index) => (
        <div className={`${index !== selectedConfig ? 'hidden' : ''}`}>
          <div>{gameConfig.description}</div>
          {gameConfig.rssm}
        </div>
      ))}
      {selectedConfig < config.length - 1 &&
        <button className="nextButton navButton" onClick={() => setSelectedConfig(selectedConfig + 1)}> next </button>
      }
    </>
  )
};

export default BlocksPage;
