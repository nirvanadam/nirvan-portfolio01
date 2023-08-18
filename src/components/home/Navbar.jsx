import React from "react";
import { useState } from "react";

function Navbar() {
  const [displayMenu, setDisplayMenu] = useState(false);

  return (
    <div className="sticky top-0 z-50">
      {/* Navbar */}
      <div className="flex justify-between items-center px-4 md:px-6 xl:px-16 py-5 md:py-7 bg-[#e9e9e9]">
        {/* logo */}
        <div className="flex items-center gap-2">
          <img src="/images/quick-tix-logo.png" alt="" className="w-9" />
          <h1 className="text-2xl font-bold">ADAM</h1>
        </div>
        {/* logo End */}

        {/* Menu Desktop */}
        <div className="hidden lg:flex gap-8">
          <button className="font-semibold">Home</button>
          <button className="font-semibold">About</button>
          <button className="font-semibold">Contact</button>
        </div>
        {/* Menu Desktop End */}

        <div className="flex gap-3">
          {/* Hamburger Menu */}
          <button
            type="button"
            onClick={() => {
              setDisplayMenu(!displayMenu);
            }}
            className="flex lg:hidden flex-col justify-between bg-black w-11 h-11 p-3 py-4"
          >
            <span className="bg-white h-[2px] w-full rounded-full" />
            <span className="bg-white h-[2px] w-full rounded-full" />
            <span className="bg-white h-[2px] w-full rounded-full" />
          </button>
          {/* Hamburger Menu End */}

          {/* Let's Talk Button */}
          <button className="hidden md:block border border-black px-6 py-2 font-semibold">Let's Talk</button>
          {/* Let's Talk Button End */}
        </div>
      </div>
      {/* Navbar End */}

      {/* Menu */}
      <div className={`${displayMenu ? "" : "-translate-y-36"} absolute left-0 right-0 -z-10 bg-white flex flex-col items-center gap-5 py-3 transition-all duration-500`}>
        <button className="font-semibold">Home</button>
        <button className="font-semibold">About</button>
        <button className="font-semibold">Contact</button>
      </div>
      {/* Menu End */}
    </div>
  );
}

export default Navbar;
