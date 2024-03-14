import React from "react";
import Child from "./Child";

const Parent = () => {
  function onClick() {
    console.log("clicked");
  }

  return <Child color={"red"} onClick={onClick} />;
};

export default Parent;
