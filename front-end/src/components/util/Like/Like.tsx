import React, { useState, useEffect } from 'react';
import '../../../styles/global.css';
import ThumbsUp from '../../Images/ThumbsUp';

interface Props {
  updateLike: Function;
  AlreadyLiked: boolean;
}

const Like: React.FC<Props> = props => {
  const { updateLike, AlreadyLiked } = props;
  const [isLiked, userLikesThis] = useState(AlreadyLiked);
  const updateLikeState = () => {
    console.log('Like button was clicked!');
    // userLikesThis(!isLiked);
  };
  return (
    <div className='bg-trim-color p-3'>
      {isLiked == true ? (
        <ThumbsUp fill='#0000ff' updateLike={updateLikeState} />
      ) : (
        <ThumbsUp fill='#fff' updateLike={updateLikeState} />
      )}
    </div>
  );
};

export default Like;
