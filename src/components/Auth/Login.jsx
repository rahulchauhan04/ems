import React, { useState } from "react";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Form Submitted');
    console.log('Email:', email);
    console.log('Password:', password);

    setEmail('');
    setPassword('');
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center ">
    <div className="border-2 rounded-xl border-emerald-600 p-20 shadow-lg transition-shadow duration-300 hover:shadow-emerald-600 hover:shadow-lg">
      <form onSubmit={submitHandler} className="flex flex-col items-center justify-center space-y-4">
        <input
          value={email}
          onChange={ (e) => {
            setEmail(e.target.value);
          }}
          required
          className="outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-gray-400 text-white transition duration-300 focus:shadow-lg focus:shadow-emerald-600"
          type="email"
          placeholder="Enter your Email"
        />
        <input
          value={password}
          onChange={ (e) => {
            setPassword(e.target.value);
          }}
          required
          className="outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-gray-400 text-white transition duration-300 focus:shadow-lg focus:shadow-emerald-600"
          type="password"
          placeholder="Enter Password"
        />
        <button
          className="text-white outline-none border-none mt-5 bg-emerald-600 py-3 px-5 text-xl rounded-full transition duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-600"
        >
          Log in
        </button>
      </form>
    </div>
  </div>
  
  );
};

export default Login;
