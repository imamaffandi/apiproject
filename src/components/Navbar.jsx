import { useState } from "react";
import { sun, moon, search } from "../asset";
const Navbar = ({ handleClick }) => {
  const [cari, setCari] = useState(false);

  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => {
    setIsChecked(!isChecked);
    handleClick();
  };

  const checkbox = isChecked ? sun : moon;
  return (
    <div className="bg-white fixed rounded-sm w-[90%] border-2 border-black mt-3 left-0 right-0 mx-auto">
      <div className="flex p-5 justify-between items-center">
        <div className="">MoviePI</div>
        <div className="flex gap-5 justify-between items-center">
          <div className="flex gap-5 items-center">
            <form className={cari ? "flex" : "hidden"}>
              <input
                type="text"
                className=" h-5 border-2 border-black rounded-sm"
              />
            </form>
            <img
              src={search}
              className="w-5 h-5 object-cover cursor-pointer"
              onClick={() => {
                setCari(!cari);
              }}
            />
          </div>
          <div>
            <img
              src={checkbox}
              className={`w-5 h-5 object-cover cursor-pointer`}
              onClick={toggleCheck}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
