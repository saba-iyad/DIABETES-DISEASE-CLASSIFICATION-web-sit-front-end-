import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './containers/Home';
import CardContainer from './containers/CardConatiner';

function App() {
  const [start, setStart] = useState(false);

  return (
    <div style={{ backgroundColor: '#f0f0f0', height: '100vh' }}>
      <Navbar start={start} setStart={setStart} />
      <div className='d-md-flex flex-column align-items-center pb-3'>
        {start ? (
          <div>
            <CardContainer setStart={setStart} />
          </div>
        ) : (
          <div>
            <Home setStart={setStart} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
