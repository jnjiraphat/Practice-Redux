import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as R from "ramda";

import { getRootCheckState, getCheckState } from "module/check/selectors";
import { checkNum } from "module/check/actions";

const App = () => {
  const dispatch = useDispatch();
  const textNum = useSelector(R.compose(getCheckState, getRootCheckState));
  // const [value, setValue] = useState("");

  return (
    <div className="App">
      <h1>{textNum}</h1>
      <input
        // type="text"
        // value={value}
        onChange={(e) => dispatch(checkNum(Number(e.target.value)))}
      />
      {/* <input type="submit" value="Submit" /> */}
    </div>
  );
};

export default App;
