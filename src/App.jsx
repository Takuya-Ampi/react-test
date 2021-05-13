import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0);

  return (
    <>
      <h1 style={{ color: "red", fontSize: "24px" }}>Hello</h1>
      <ColorfulMessage color="blue">新しいメッセージ</ColorfulMessage>
      <ColorfulMessage color="pink">Yeah</ColorfulMessage>
      <button onClick={onClickCountUp}>クリック</button>
      <p>{num}</p>
    </>
  );
};

export default App;
