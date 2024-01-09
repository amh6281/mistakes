"use client";

import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    zipCode: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // 가독성 향상
  // const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");

  //   const handleChange = (e) => {
  //     setForm((prev) => ({
  //       ...prev,
  //       firstName: e.target.value,
  //     }));
  //   };

  return (
    <form className="flex flex-col gap-y-2">
      <input
        type="text"
        name="firstName"
        placeholder="first name"
        className="px-4 py-2"
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="last name"
        className="px-4 py-2"
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        placeholder="email"
        className="px-4 py-2"
        onChange={handleChange}
      />
      <input
        type="text"
        name="password"
        placeholder="password"
        className="px-4 py-2"
        onChange={handleChange}
      />
      <input
        type="text"
        name="address"
        placeholder="address"
        className="px-4 py-2"
        onChange={handleChange}
      />
      <input
        type="text"
        name="zipCode"
        placeholder="zipcode"
        className="px-4 py-2"
        onChange={handleChange}
      />
    </form>
  );
};

export default Form;
