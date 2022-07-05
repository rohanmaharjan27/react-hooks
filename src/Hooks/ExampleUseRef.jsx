import React, { useEffect, useRef, useState } from 'react';

const ExampleUseRef = () => {
  const inputEl = useRef(null);

  const [name, setName] = useState('');

  const prevName = useRef('');

  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };

  // if we use state instead of prevName.current, it causes re-render but by using ref, we do not cause re render

  // The useRef Hook can also be used to keep track of previous state values.

  // This is because we are able to persist useRef values between renders.

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <div style={{ fontSize: '30px', fontWeight: 600 }}>
        useRef Hook
        <br />
        <input ref={inputEl} type='text' />
        <button onClick={onButtonClick}>Focus the input</button>
        <br />
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <div>
          My name is {name} and it used to be {prevName.current}
        </div>
      </div>
    </div>
  );
};

export default ExampleUseRef;
