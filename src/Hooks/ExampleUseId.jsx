import React, { useId } from 'react';

const ExampleUseId = () => {
  const id = useId();
  const id2 = useId();
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <div style={{ fontSize: '30px', fontWeight: 600 }}>
        useId Hook
        <br />
        <br />
        <label htmlFor={`${id}-firstName`}>Name</label>
        <br />
        <input id={`${id}-firstName`} type='input' name='react' />
        <br />
        <label htmlFor={`${id}-lastName`}>Age</label>
        <br />
        <input id={`${id}-lastName`} type='input' name='react' />
        <br />
        <label htmlFor={id2}>Checkbox</label>
        <br />
        <input id={id2} type='checkbox' name='react' />
        <br />
      </div>
    </div>
  );
};

export default ExampleUseId;
