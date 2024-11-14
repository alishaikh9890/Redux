
import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { incCount, decCount, resetCount } from "./Redux/action";

function App() {

  const {count} = useSelector((state) => state);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={() => dispatch(incCount(1))}>INC COUNT</button>
      <button onClick={() => dispatch(decCount(1))}>DEC COUNT</button>
      <button onClick={() => dispatch(resetCount())}>RESET COUNT</button>
    </div>
  );
}

export default App;
