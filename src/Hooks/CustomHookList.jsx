import React from 'react';
import useFetch from './ExampleCustomHook';

const CustomHookList = () => {
  const [data] = useFetch('https://jsonplaceholder.typicode.com/todos');
  return (
    <div>
      {data?.length > 0 &&
        data.map((item, idx) => {
          return <p key={idx}>{item.title}</p>;
        })}
    </div>
  );
};

export default CustomHookList;
