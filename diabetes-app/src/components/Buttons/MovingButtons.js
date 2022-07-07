import React from 'react';
import { Button } from 'antd';

function MovingButtons({ prev, type, submit }) {
  return (
    <div className='d-flex justify-content-end mt-5'>
      <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
        Prev
      </Button>
      <Button
        style={{ backgroundColor: '#EF76A1' }}
        className='text-light'
        htmlType='submit'
      >
        {submit ? 'Submit' : 'Next'}
      </Button>
    </div>
  );
}

export default MovingButtons;
