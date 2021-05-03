import React from "react";
import { Interface } from "node:readline";
import Child from "./Child";
import Names from "./Names";
import State from "./State";

function App() {
  return (
    <div>
      {/* <Names dave="Coolest kid" /> */}
      <Child name="Dave" age={26}>
        Hei
      </Child>
      {/* <State /> */}
    </div>
  );
}

export default App;
