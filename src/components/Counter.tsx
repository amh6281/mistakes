"use client";

import { useEffect, useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  // 클로저로 인한 count 값이 0으로 고정되는 문제
  //   useEffect(() => {
  //     setInterval(() => {
  //       console.log("running");
  //       setCount(count + 1);
  //     }, 1000);
  //   }, []);

  // 해결 방법 : return 함수 사용 -> unmount 시에 clearInterval를 통해 setInterval을 멈춤
  useEffect(() => {
    const i = setInterval(() => {
      console.log("running");
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(i);
    };
  }, []);

  return <div>Counter</div>;
};
