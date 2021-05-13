import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [showFlag, setShowFlag] = useState(true);
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setShowFlag(!showFlag);
  };

  useEffect(() => {
    if (num <= 0) return;
    if (num % 3 === 0) return setShowFlag(true);
    setShowFlag(false);
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red", fontSize: "24px" }}>Hello</h1>
      <ColorfulMessage color="blue">新しいメッセージ</ColorfulMessage>
      <ColorfulMessage color="pink">Yeah</ColorfulMessage>
      <button onClick={onClickCountUp}>クリック</button>
      <button onClick={onClickSwitchShowFlag}>switch</button>
      <p>{num}</p>
      {showFlag && <p>true</p>}
      {/* { showFlag ?  <p>true</p> : <p>false</p> } */}
    </>
  );
};

export default App;
