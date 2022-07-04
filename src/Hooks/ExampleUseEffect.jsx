import React, { useEffect, useState } from 'react';

const ExampleUseEffect = () => {
  const [counter, setCounter] = useState(-1);
  const [value, setValue] = useState('');

  useEffect(() => {
    setCounter(counter + 1);
    // eslint-disable-next-line
  }, [value]);

  const handleInputChange = (e) => {
    let value = e.target.value;

    setValue(value);
  };

  // The useEffect Hook is built in a way that we can return a function inside it and this return function is where the cleanup happens.
  // The cleanup function prevents memory leaks and removes some unnecessary and unwanted behaviors.

  useEffect(() => {
    const handleResize = () => {
      console.log('Do resize stuff');
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <div style={{ fontSize: '30px', fontWeight: 600 }}>
        useEffect Hook
        <br />
        <br />
        Counter
        <br />
        {counter}
        <br />
        <input
          name='value'
          value={value}
          placeholder='Value'
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default ExampleUseEffect;
