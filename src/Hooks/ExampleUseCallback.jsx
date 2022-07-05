import React, { useCallback, useState } from 'react';
import Todos from './Todos';

const ExampleUseCallback = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  // const addTodo = () => {
  //   setTodos((t) => [...t, 'New Todo']);
  // };

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, 'New Todo']);
    // eslint-disable-next-line
  }, [todos]);

  console.log('addTodo', addTodo);

  console.log('parent render');

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default ExampleUseCallback;
