"use client";

import { useState } from "react";

const ObjectState = () => {
  const [user, setUser] = useState<any>({ name: "", city: "", age: 26 });

  // Object State 업데이트는 직접 업데이트보다 함수형 업데이트를 통해 상태 불변성 유지
  const handleChange = (e) => {
    // setUser({ ...user, name: e.target.value });
    setUser((prev) => {
      return {
        ...prev,
        name: e.target.value,
      };
    });
  };

  return (
    <form>
      <input type="text" onChange={handleChange} placeholder="name..." />
    </form>
  );
};

export default ObjectState;
