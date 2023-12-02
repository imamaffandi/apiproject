import React from "react";
import { sun, moon, search } from "../asset";
const Navbar = () => {
  return (
    <div className="bg-transparent fixed rounded-sm w-[90%] border-2 border-black mt-3 left-0 right-0 mx-auto">
      <div className="flex p-5 justify-between items-center">
        <div>Logo</div>
        <div className="flex gap-5 justify-between items-center">
          <div>
            <img src={search} className="w-5 h-5 object-cover cursor-pointer" />
          </div>
          <div>
            <img src={sun} className="w-5 h-5 object-cover cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
