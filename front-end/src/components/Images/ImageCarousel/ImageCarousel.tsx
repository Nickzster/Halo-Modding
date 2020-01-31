import React, { useState } from 'react';
import { Link } from '../../../types/Post';
import '../../../styles/global.css';

interface Props {
  images: Array<Link>;
}

const ImageCarousel: React.FC<Props> = props => {
  const { images } = props;
  const [currentImage, changeCurrentImage] = useState(0);
  // console.log(currentImage);
  return (
    <div>
      <img
        className='w-full'
        src={images[currentImage].url}
        alt={images[currentImage].source}
      />
      {images.length <= 1 ? null : (
        <div className='items-center justify-between flex'>
          <img
            className='left-0 h-12 w-12 cursor-pointer inline'
            src={require('../../../images/left.svg')}
            onClick={() => {
              if (currentImage - 1 < 0) changeCurrentImage(images.length - 1);
              else changeCurrentImage(currentImage - 1);
            }}
          />
          <img
            className='right-0 h-12 w-12 cursor-pointer inline'
            src={require('../../../images/right.svg')}
            onClick={() => {
              if (currentImage + 1 >= images.length) changeCurrentImage(0);
              else changeCurrentImage(currentImage + 1);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
