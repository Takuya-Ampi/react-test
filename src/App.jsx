import React from "react";

const App = () => {
  const onClickButton = () => alert("aaa");
  const contentStyle = { color: "blue", fontSize: "18px" };
  return (
    <>
      <h1 style={{ color: "red", fontSize: "24px" }}>Hello</h1>
      <p style={contentStyle}>拡張子変更</p>
      <button onClick={onClickButton}>クリック</button>
    </>
  );
};

export default App;
