import React from 'react';

interface Props {
  Image: string;
  URL: string;
}

export const PostCard: React.FunctionComponent<Props> = props => {
  const { Image, URL } = props;
  return (
    <div className='m-4'>
      <a className='h-64 w-64' href={URL}>
        <img style={{ objectFit: 'cover' }} className='h-64 w-64' src={Image} />
      </a>
    </div>
  );
};
