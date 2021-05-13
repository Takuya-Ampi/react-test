import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert("aaa");

  return (
    <>
      <h1 style={{ color: "red", fontSize: "24px" }}>Hello</h1>
      <ColorfulMessage color="blue" message="お元気ですか？" />
      <ColorfulMessage color="pink" message="元気です" />
      <button onClick={onClickButton}>クリック</button>
    </>
  );
};

export default App;
