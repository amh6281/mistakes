"use client";

import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(1920);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return windowSize;
};
// 반복되는 코드를 Hook으로 만들어서 사용
const Hook1 = () => {
  //   const [windowSize, setWindowSize] = useState(1920);

  //   useEffect(() => {
  //     const handleWindowSizeChange = () => {
  //       setWindowSize(window.innerWidth);
  //     };
  //     window.addEventListener("resize", handleWindowSizeChange);

  //     return () => {
  //       window.removeEventListener("resize", handleWindowSizeChange);
  //     };
  //   }, []);

  const windowSize = useWindowSize();

  return <div>Hook1</div>;
};

const Hook2 = () => {
  //   const [windowSize, setWindowSize] = useState(1920);

  //   useEffect(() => {
  //     const handleWindowSizeChange = () => {
  //       setWindowSize(window.innerWidth);
  //     };
  //     window.addEventListener("resize", handleWindowSizeChange);

  //     return () => {
  //       window.removeEventListener("resize", handleWindowSizeChange);
  //     };
  //   }, []);

  const windowSize = useWindowSize();

  return <div>Hook2</div>;
};
