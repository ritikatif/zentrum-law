import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between font-bold text-xl items-center">
      <img className="h-14" src="/images/headerLogo.png" alt="headder" />

      <div className="flex justify-between gap-7 items-center ">
        <div>About</div>
        <div>People</div>
        <div>Expertise</div>
        <div>Blogs</div>
        <div className="shrink">Thought Leadership</div>
        <div>Career</div>
      </div>
      <div className="bg-gray px-2 py-2">Contact Us</div>
    </div>
  );
};

export default Header;
