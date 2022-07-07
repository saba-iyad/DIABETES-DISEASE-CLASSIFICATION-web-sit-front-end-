import React, { useEffect, useState } from 'react';
import { Button, PageHeader } from 'antd';

function Navbar({ start, setStart }) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  return (
    <>
      <PageHeader
        className='site-page-header-responsive border-bottom'
        backIcon={false}
        title='Diabetes Diagnose'
        avatar={{
          src: 'https://cdn2.iconfinder.com/data/icons/covid-19-2/64/29-Doctor-512.png',
          size: 'large',
        }}
        extra={
          width >= 768 && [
            <Button
              className='px-5 mt-1 mt-md-0 text-light'
              key='1'
              style={{ backgroundColor: '#EF76A1' }}
              onClick={() => setStart(!start)}
            >
              Start
            </Button>,
          ]
        }
      />
      ,
    </>
  );
}

export default Navbar;
