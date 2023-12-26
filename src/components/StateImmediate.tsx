"use client";

import { useState } from "react";

const StateImmediate = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // setCount 호출에서 직접적인 count 증가 대신, prevState(prev)를 활용한 함수 업데이트로 변경
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <button onClick={handleClick}>Click!</button>
      {count}
    </>
  );
};

export default StateImmediate;
