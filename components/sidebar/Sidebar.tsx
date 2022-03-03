import { useState } from "react";
import { MdKeyboardArrowDown, MdOutlineClose } from "react-icons/md";

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handlemenuOpenClick = (): void => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <div onClick={handlemenuOpenClick} className={`hidden md:flex fixed text-base transition-right duration-500 ease-in-out font-sans top-64 transform rotate-90 px-5 py-3 ${menuOpen ? `right-1/3` : `right-0`}  rounded-b-md shadow-lg bg-white cursor-pointer text-blue-600 flex flex-row space-x-2 justify-center items-center z-10`}>
        <span>Self Service</span>
        <MdKeyboardArrowDown className={`transition-rotate duration-500 ease-out ${menuOpen ? `rotate-180` : `rotate-0`}  h-6 w-6 text-cyan`} />
      </div>

      <div className={`fixed transition-right duration-500 ease-in-out ${menuOpen ? `right-0` : `-right-1/3`} top-0 h-full w-1/3 bg-white shadow-lg p-6 text-blue-600 z-10`}>
        <div className="relative flex flex-col">
          <MdOutlineClose onClick={handlemenuOpenClick} className="absolute top-0 right-0 h-8 w-8 text-cyan hover:text-blue-600 cursor-pointer" />
        </div>
      </div>
    </>
  )
}