import React from "react";
import "./App.css";
// import { UseState } from "./components/UseState/UseState";
// import { UseReducer } from "./components/UseReducer/UseReducer";
// import { ObjectUseState } from "./components/Immutable State/ObjectUseState";
// import { ArrayUseState } from "./components/Immutable State/ArrayUseState";
// import { ObjectUseReducer } from "./components/Immutable State/ObjectUseReducer";
// import { ArrayUseReducer } from "./components/Immutable State/ArrayUseReducer";
// import { Parent } from "./components/Parent Child/Parent";
// import { ParentOne } from "./components/Optimization/ParentOne";
// import { ChildOne } from "./components/Optimization/ChildOne";
// import { GrandParent } from "./components/Optimization/GrandParent";
import { ParentTwo } from "./components/Optimization/ParentTwo";

const App = () => {
  // return <UseState />;
  // return <UseReducer />;
  // return <ObjectUseState />;
  // return <ArrayUseState />;
  // return <ObjectUseReducer />;
  // return <ArrayUseReducer />;
  // return <Parent />;
  return (
    <div>
      {/* <ParentOne>
        <ChildOne />
      </ParentOne> */}
      {/* <GrandParent /> */}
      <ParentTwo />
    </div>
  );
};

export default App;
