import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='container mx-auto text-font-color text-center'>
      <h1 className='text-4xl'>404 Not Found</h1>
      <p className='text-2xl'>
        Uh oh, we can't find that. Click{' '}
        <Link style={{ textDecorationLine: 'underline' }} to='/'>
          here
        </Link>{' '}
        to go back home
      </p>
    </div>
  );
};

export default NotFound;
