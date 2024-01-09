"use client";

import { useEffect, useState } from "react";

const Cart = () => {
  //   const [quantity, setQuantity] = useState(1);
  //   const [totalPrice, setTotalPrice] = useState(0);

  //   const price = 5;

  //   const handleClick = () => {
  //     setQuantity(quantity + 1);
  //   };

  //   useEffect(() => {
  //     setTotalPrice(quantity * price);
  //   }, [quantity]);

  // or

  // const [firstName, setFirstName] = useState('')
  // const [lastName, setLastName] = useState('')
  // const [fullName, setFullName] = useState('')

  // 코드 간결 + 불필요한 상태 관리 최소화

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const fullName = firstName + lastName;

  const [quantity, setQuantity] = useState(1);

  const price = 5;
  const totalPrice = quantity * price;

  const handleClick = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Add to Cart</button>
      <span>Total Price: {totalPrice}</span>
    </div>
  );
};

export default Cart;
