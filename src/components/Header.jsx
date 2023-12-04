import React from "react";

const Header = () => {
  return (
    <div className="h-screen w-full flex flex-col-reverse sm:flex-row gap-5 justify-between items-center">
      <div className="p-10 flex flex-col">
        <p className="text-sm text-gray-500">Today Highlight</p>
        <p className="text-2xl font-black">Movie Title</p>
        <p>
          Movie Des Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Odit, hic.
        </p>
      </div>
      <img
        src="https://i.pinimg.com/236x/99/f8/70/99f8702093bd74454c4636a33f558c4a.jpg"
        className="h-full w-full sm:w-[50%] object-cover"
      />
    </div>
  );
};

export default Header;
