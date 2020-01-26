import React from 'react';

interface Props {
  Title: string;
  Image: string;
}

export const NavItem: React.FC<Props> = props => {
  const { Title, Image } = props;
  return (
    <span className='pl-4 pr-4 text-center'>
      <img className='h-10 w-10' src={require(`../../images/${Image}`)} />
      <p className='text-xs'>{Title}</p>
    </span>
  );
};
