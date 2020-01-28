import React from 'react';
import { Redirect } from 'react-router-dom';

const LandingPage = () => {
  return <Redirect to='/explore' />;
  // return (
  //   <div className='text-font-color container mx-auto text-center'>
  //     <h1 className='text-4xl'>Welcome to Halo Modding!</h1>
  //     <p>This page is currently WIP.</p>
  //   </div>
  // );
};

export default LandingPage;
