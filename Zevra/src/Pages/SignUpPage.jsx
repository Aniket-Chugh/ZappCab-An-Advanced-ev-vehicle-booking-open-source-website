import React, { useState } from 'react';
import axios from 'axios';

const SignUpPage = () => {
  const [user, setUser] = useState({
    phone_num: "",
    username: "",
    email: "",
    pass: ""
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     await axios.post("http://localhost:3000/register", {
  phone_num: user.phone_num,
  username: user.username,
  email: user.email,
  pass: user.pass
}, {
  withCredentials: true
});

    } catch (err) {
      console.log("Error found:", err);
    }
  };

  return (
    <div className='text-white'>
      <div className='p-6 m-4 text-black'>
        <input
          type="number"
          name="phone_num"
          placeholder="Phone number"
          value={user.phone_num}
          onChange={handleInput}
          className='p-3 outline-none border border-black m-7'
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={user.username}
          onChange={handleInput}
          className='p-3 outline-none border border-black m-7'
        />
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={user.email}
          onChange={handleInput}
          className='p-3 outline-none border border-black m-7'
        />
        <input
          type="password"
          name="pass"
          placeholder="Enter password"
          value={user.pass}
          onChange={handleInput}
          className='p-3 outline-none border border-black m-7'
        />
        <button className='bg-black text-white p-3 m-7' onClick={handleSubmit}>
          Register
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
