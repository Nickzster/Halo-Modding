import React from 'react';
import './styles/paper.css';

interface Props {}

const WIP: React.FunctionComponent<Props> = props => {
  return (
    <div className='paper'>
      <h1>Hello, Halo Modders!</h1>
      <p>
        As you can see, this app is still in the works. In the next coming
        weeks, we look forward to bringing a platform to help modders network
        and share their creations with the community.
      </p>
      <br />
      <p>Thanks for stopping by, and be sure to check back often!</p>
    </div>
  );
};

export default WIP;
