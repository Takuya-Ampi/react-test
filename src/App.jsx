import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert("aaa");

  return (
    <>
      <h1 style={{ color: "red", fontSize: "24px" }}>Hello</h1>
      <ColorfulMessage color="blue">新しいメッセージ</ColorfulMessage>
      <ColorfulMessage color="pink">Yeah</ColorfulMessage>

      <button onClick={onClickButton}>クリック</button>
    </>
  );
};

export default App;
