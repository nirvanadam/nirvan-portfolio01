import React from "react";

function Footer() {
  return (
    <footer className="bg-black flex flex-col items-center gap-7 py-14 md:px-8 xl:px-28">
      <div className="flex flex-col gap-5 md:flex-row justify-between items-center md:w-full">
        <div className="flex items-center gap-3">
          <div className="bg-white w-fit md:h-fit rounded-full p-2">
            <img src="images/quick-tix-logo.png" alt="" className="w-9" />
          </div>
          <h1 className="text-2xl font-bold text-white">ADAM</h1>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <button className="text-white font-semibold">Style Guide</button>
          <button className="text-white font-semibold">Licence</button>
          <button className="text-white font-semibold">Change Log</button>
        </div>
      </div>

      <div className="flex flex-col gap-5 md:flex-row justify-between items-center md:w-full">
        <p className="text-white text-sm font-medium">© Made by Nirvan Adam</p>

        <div className="flex gap-3">
          <button
            onClick={() => {
              window.open("https://tailwindcss.com/docs/skew", "_blank");
            }}
            className="flex justify-center items-center border border-gray-500 p-3 rounded-full hover:scale-110 hover:border-white transition-all duration-500"
          >
            <img src="icons/linkedin-icon.png" alt="" className="w-4 invert" />
          </button>

          <button
            onClick={() => {
              window.open("https://tailwindcss.com/docs/skew", "_blank");
            }}
            className="flex justify-center items-center border border-gray-500 p-3 rounded-full hover:scale-110 hover:border-white transition-all duration-500"
          >
            <img src="icons/twitter-icon.png" alt="" className="w-4 invert" />
          </button>

          <button
            onClick={() => {
              window.open("https://tailwindcss.com/docs/skew", "_blank");
            }}
            className="flex justify-center items-center border border-gray-500 p-3 rounded-full hover:scale-110 hover:border-white transition-all duration-500"
          >
            <img src="icons/instagram-icon.png" alt="" className="w-4 invert" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
