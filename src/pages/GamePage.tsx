import React, {useEffect, useRef} from 'react';
import {SuperSlideMe} from 'react-super-slide-me';
import {Link} from 'react-router-dom';

interface Props {
  id: string,
  levels?: string[] | undefined,
}

const GamePage = (props: Props) => {
  let customLevels = props.levels ? props.levels : undefined;
  const ref = useRef(null);

  useEffect(() => {
    const ele = document.getElementById(props.id)?.children[0];
    // @ts-ignore
    ele.focus()
  }, [ref])

  return (
    <>
      <Link to="/"><div className="backArrow">← Back</div></Link>
      <div className="gameContainer" tabIndex={0} ref={ref}>
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