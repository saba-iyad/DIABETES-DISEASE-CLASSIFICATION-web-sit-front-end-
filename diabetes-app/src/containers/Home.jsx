import { Button } from 'antd';
import React, { useState, useEffect } from 'react';
import HomePic from '../assets/diabetes.svg';

function Home({ setStart }) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  const handleStart = () => {
    setStart(true);
  };
  return (
    <div className='d-md-flex h-100 align-items-center'>
      <div className='h-100 mx-md-5 d-md-flex flex-column justify-content-center align-items-center'>
        <div className='mx-3 mx-md-5 mt-5'>
          <h1 className='d-block mx-auto  mb-4 ' style={{ color: '#EF76A1' }}>
            Welcome to our Diabetes Diagnose System
          </h1>
          <h4 className={`${width > 1200 ? 'w-75' : ''}`}>
            Here you can Enter your medical information and we can tell you if
            you have diabetes or not
          </h4>
          <h5 className={`${width > 1200 ? 'w-75' : ''} mt-3 text-danger`}>
            Note : This web app is for educational purposes only and you must
            see a real doctor.
          </h5>
          <Button
            style={{ backgroundColor: '#EF76A1' }}
            size='large'
            className='rounded px-5 mt-4 text-light'
            onClick={handleStart}
          >
            Start
          </Button>
          <div className='my-5'></div>
        </div>
      </div>
      <div className=' pt-4'>
        {width > 768 ? (
          <img
            className='pt-5'
            src={HomePic}
            alt='system users'
            width={500}
            height={500}
          />
        ) : (
          <img className='pt-5' src={HomePic} alt='system users' />
        )}
      </div>
    </div>
  );
}

export default Home;
