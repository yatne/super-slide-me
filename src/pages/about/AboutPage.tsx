import * as React from 'react';

const AboutPage = () => {
  return (
    <div className="about-page">
      <p>
        This game was developed as a coding exercise. It is written in React and is available as a React Component through an <a href="https://www.npmjs.com/package/react-super-slide-me">npm package</a>.
      </p>
      <p>
        You can embed the game component in your own React project, and provide it with custom levels.
      </p>
      <p>
        The code for this site is <a href="https://github.com/yatne/super-slide-me">here</a> and for the game itself <a href="https://github.com/yatne/react-super-slide-me">here</a>.
      </p>
    </div>
  )
};

export default AboutPage;
