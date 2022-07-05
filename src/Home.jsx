import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const listOfHooks = [
    'useState',
    'useEffect',
    'useLayoutEffect',
    'useContext',
    'useReducer',
    'useRef',
    'useMemo',
    'useCallback',
    'useId',
    'useCallback',
    'CustomHook',
  ];

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <div style={{ fontSize: '30px', fontWeight: 600 }}>
        REACT HOOKS
        <ul>
          {listOfHooks.map((item, idx) => (
            <Link to={`/${item}`} key={idx}>
              <li>{item}</li>
            </Link>
          ))}
        </ul>
      </div>
      <br />
    </div>
  );
};

export default Home;
