"use client";

import { useEffect, useState } from "react";

const Conditional = ({ id }: { id: number }) => {
  const [something, setSomething] = useState("hello");

  useEffect(() => {}, [something]);

  //   if (!id) {
  //     return "No id";
  //   }

  // 조건부로 "No id" 메시지를 삼항 연산자를 사용하여 렌더링하도록 변경.
  return (
    <div>
      {!id
        ? "No id"
        : {
            /*id */
          }}
    </div>
  );
};

export default Conditional;
