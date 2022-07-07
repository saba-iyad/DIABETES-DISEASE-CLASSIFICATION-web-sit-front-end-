import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Spin } from 'antd';
import defect from '../assets/defect.svg';
import heal from '../assets/heal.svg';

function Results({ Info, setStart }) {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);

  useEffect(() => {
    axios({
      method: 'POST',
      data: {
        ...Info,
      },
      url: 'https://diabetes-model-1293.herokuapp.com/',
    })
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch(({ err }) => {
        setErr({ err });
      });
  }, [Info]);
  return (
    <>
      {err ? (
        <h2 className='alert alert-danger mt-5'>Something went wrong</h2>
      ) : (
        <div className='mt-5'>
          {loading ? (
            <div className='d-flex justify-content-center align-items-center'>
              <Spin size='large' />
            </div>
          ) : (
            <div className='d-flex flex-column align-items-center'>
              {data === 'has diabetes' ? (
                <>
                  <h3 className='text-center'>
                    Check Your Doctor You may have Diabetes
                  </h3>
                  <img
                    className='w-100 h-100'
                    src={defect}
                    alt='has diabetes'
                  />
                </>
              ) : data ===
                'The patient maybe has diabetes check your doctor' ? (
                <>
                  <h2 className='text-center'>
                    Check Your Doctor You may have Diabetes
                  </h2>
                  <img
                    className='w-100 h-100'
                    src={defect}
                    alt='maybe has diabetes'
                  />
                </>
              ) : (
                <>
                  <h2 className='text-center'>Congrats, No Diabetes</h2>
                  <img
                    className='w-100 h-100'
                    src={heal}
                    alt='dont have diabetes'
                  />
                </>
              )}

              <Button
                style={{ backgroundColor: '#EF76A1' }}
                size='large'
                className='rounded px-5 mt-4 text-light'
                onClick={() => setStart(false)}
              >
                Return Home
              </Button>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Results;
