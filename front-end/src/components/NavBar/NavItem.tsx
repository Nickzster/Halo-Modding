import React from 'react';
import { Link } from 'react-router-dom';
import { baseURL } from '../../utils/url';

interface Props {
  Title: string;
  Image: string;
  URL: string;
}

export const NavItem: React.FC<Props> = props => {
  const { Title, Image, URL } = props;
  return (
    <Link className='pl-4 pr-4 text-center' to={URL}>
      <img className='h-10 w-10' src={require(`../../images/${Image}`)} />
      <p className='text-xs'>{Title}</p>
    </Link>
  );
};
