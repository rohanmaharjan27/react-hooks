import React, { useState } from 'react';

const ExampleUseState = () => {
  const [counter, setCounter] = useState(0);

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    age: 0,
  });

  const { firstName, lastName, age } = user;

  const handleCounterIncrease = () => {
    setCounter((counter) => counter + 1);
  };

  const handleCounterDecrease = () => {
    setCounter(counter - 1);
  };

  const handleCounterReset = () => {
    setCounter(0);
  };

  const handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  console.log('user', user);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <div style={{ fontSize: '30px', fontWeight: 600 }}>
        useState Hook
        <br />
        <br />
        Counter
        <br />
        {counter}
        <br />
        <button onClick={handleCounterIncrease}>Increase </button>
        <br />
        <button onClick={handleCounterDecrease}>Decrease </button>
        <br />
        <button onClick={handleCounterReset}>Reset </button>
        <br />
        User
        <br />
        <input
          name='firstName'
          value={firstName}
          placeholder='First Name'
          onChange={handleInputChange}
        />
        <br />
        <input
          name='lastName'
          value={lastName}
          placeholder='Last Name'
          onChange={handleInputChange}
        />
        <br />
        <input
          type='number'
          name='age'
          value={age}
          placeholder='Age'
          onChange={handleInputChange}
        />
        <br />
        Your name is {firstName} {lastName}.
        <br />
        You are {age} years old.
      </div>
    </div>
  );
};

export default ExampleUseState;
