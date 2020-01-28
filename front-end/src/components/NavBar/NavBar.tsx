import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/global.css';
import { NavItem } from './NavItem';

const Navbar: React.FunctionComponent = () => {
  return (
    <div
      style={{ position: 'sticky' }}
      className='flex items-center justify-between flex-wrap bg-primary-blue shadow-lg mb-16 p-6'
    >
      <Link to='/' className='flex items-center flex-shrink-0 text-white mr-6'>
        <img
          className='h-12 w-12 mr-3'
          src={require('../../images/ForgeLogo.png')}
        />
        <span className='font-semibold text-xl tracking-tight'>
          Halo Modding
        </span>
      </Link>
      <div className='flex items-center flex-shrink-0 text-white mr-6'>
        <NavItem Title='Upload' Image='upload.svg' URL='/create-new-post' />
        {/* <NavItem Title='Explore' Image='explore.svg' />
        <NavItem Title='Notifs' Image='notifications.svg' />
        <NavItem Title='Profile' Image='account.svg' /> */}
      </div>
    </div>
  );
};

export default Navbar;
