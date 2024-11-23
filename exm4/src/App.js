
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incCount, decCount } from './Redux/action';

function App() {
  const {count} = useSelector((state) => state);
  const dispatch = useDispatch();


  return (
    <div className="App">
     <button onClick={() => dispatch(incCount(1))}>+</button>
     <b>{count}</b>
     <button onClick={() =>dispatch(decCount(1))}>-</button>
    </div>
  );
}


export default App;
