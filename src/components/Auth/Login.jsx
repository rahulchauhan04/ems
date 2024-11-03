import React from "react";

const Login = () => {

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Form Submitted');
  }

  return (
     <div className="flex h-screen w-screen items-center justify-center ">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form onSubmit={submitHandler} className="flex flex-col items-center justify-center">
          <input required
            className="outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-gray-400" 
            type="email" 
            placeholder="Enter your Email"
          />
          <input required 
            className="outline-none mt-3 bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-gray-400" 
            type="password" 
            placeholder="Enter Password" 
          />
          <button 
            className="text-white outline-none border-none mt-5 bg-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-white">
            Log in
          </button>
        </form>
      </div>
     </div>
  );
};

export default Login;
