import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ExampleUseState from './Hooks/ExampleUseState';
import ExampleUseEffect from './Hooks/ExampleUseEffect';
import ExampleUseLayoutEffect from './Hooks/ExampleUseLayoutEffect';
import ExampleUseContext from './Hooks/ExampleUseContext';
import ExampleUseReducer from './Hooks/ExampleUseReducer';
import ExampleUseMemo from './Hooks/ExampleUseMemo';
import ExampleUseRef from './Hooks/ExampleUseRef';
import ExampleUseCallback from './Hooks/ExampleUseCallback';
import Home from './Home';
import ExampleUseId from './Hooks/ExampleUseId';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/useState' element={<ExampleUseState />} />
        <Route path='/useEffect' element={<ExampleUseEffect />} />
        <Route path='/useLayoutEffect' element={<ExampleUseLayoutEffect />} />
        <Route path='/useContext' element={<ExampleUseContext />} />
        <Route path='/useReducer' element={<ExampleUseReducer />} />
        <Route path='/useMemo' element={<ExampleUseMemo />} />
        <Route path='/useRef' element={<ExampleUseRef />} />
        <Route path='/useCallback' element={<ExampleUseCallback />} />
        <Route path='/useId' element={<ExampleUseId />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
