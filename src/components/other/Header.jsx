import React from "react";

const Header = () => {
  return (
     <div className="flex items-end justify-between">
          <h1 className="text-2xl font-semibold">Hello <br /> <span className="text-3xl font-semibold">Rahul 👋</span> </h1>
          <button className="bg-red-600 text-white text-lg font-medium px-5 rounded-sm py-2">Log Out</button>
     </div>
  )
};

export default Header;
