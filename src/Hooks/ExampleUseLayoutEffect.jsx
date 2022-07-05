import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

const ExampleUseLayoutEffect = () => {
  const [number, setNumber] = useState(0);

  const [sectionStyle, setSectionStyle] = useState({});

  const sectionRef = useRef();

  useEffect(() => {
    console.log('useEffect');
  }, []);

  useLayoutEffect(() => {
    console.log('useLayoutEffect');
  }, []);

  // useEffect(() => {
  //   const random = Math.floor(Math.random() * 500);

  //   /* loop is just to make the changes in this example slow enough to be observable */
  //   for (let i = 0; i <= 1000000000; i++) {
  //     if (i === 1000000000) setSectionStyle({ paddingTop: `${random}px` });
  //   }
  // }, [number]);

  useLayoutEffect(() => {
    const random = Math.floor(Math.random() * 500);

    /* loop is just to make the changes in this example slow enough to be observable */
    for (let i = 0; i <= 1000000000; i++) {
      if (i === 1000000000) setSectionStyle({ paddingTop: `${random}px` });
    }
  }, [number]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <div style={{ fontSize: '30px', fontWeight: 600 }}>
        useLayoutEffect Hook
        <br />
        <section ref={sectionRef} style={sectionStyle}>
          <p>{number}</p>
          <div>
            <button onClick={() => setNumber((prev) => prev - 1)}>-</button>
            <button onClick={() => setNumber((prev) => prev + 1)}>+</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ExampleUseLayoutEffect;
