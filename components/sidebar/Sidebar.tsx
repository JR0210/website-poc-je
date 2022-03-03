import { useState } from "react";
import { MdKeyboardArrowDown, MdOutlineClose } from "react-icons/md";

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handlemenuOpenClick = (): void => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <div onClick={handlemenuOpenClick} className={`hidden md:flex fixed text-base transition-right duration-500 ease-in-out font-sans top-[45vh] origin-top-right transform rotate-90 px-5 py-3 ${menuOpen ? `right-full lg:right-1/2 2xl:right-1/3` : `right-0`}  rounded-b-md shadow-lg bg-blue-200 text-white cursor-pointer flex flex-row space-x-2 justify-center items-center z-10`}>
        <span className="rotate-180">Self Service</span>
        <MdKeyboardArrowDown className={`transition-rotate duration-500 ease-out ${menuOpen ? `rotate-180` : `rotate-0`}  h-6 w-6`} />
      </div>

      <div className={`fixed transition-right duration-500 ease-in-out ${menuOpen ? `right-0` : `-right-1/3`} top-0 h-full w-full lg:w-1/2 2xl:w-1/3 bg-blue-300 shadow-lg p-6 z-10`}>
        <div className="relative flex flex-col">
          <MdOutlineClose onClick={handlemenuOpenClick} className="absolute top-0 right-0 h-8 w-8 text-white cursor-pointer" />
          <div className="p-16">
              <span className="text-white font-bold">
                  Self-Service
              </span>
              <div>items</div>
              
              <span className="text-white font-bold">
                  Contact
              </span>
              <div>items</div>
          </div>
        </div>
      </div>
    </>
  )
}