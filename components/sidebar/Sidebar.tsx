import { useState } from "react";
// @ts-ignore
import { MdKeyboardArrowDown, MdOutlineClose } from "react-icons/md";
import { IIconButton } from "../../lib/interfaces/icon-button";

import SideBarSection from "./SidebarSection";

import { useAppContext } from "../../context/state";

const serviceButtons: Array<IIconButton> = [
  {
    title: "Pay Now",
  },
  {
    title: "Payment Arrangement",
  },
  {
    title: "Check Balance",
  },
  {
    title: "Make Payment",
  },
];

const contactButtons: Array<IIconButton> = [
  {
    title: "Phone",
  },
  {
    title: "Whatsapp",
  },
  {
    title: "Webchat",
  },
  {
    title: "Contact Form",
  },
];

export default function Sidebar() {
  const ctx = useAppContext();
  console.log(ctx, "ctx");
  const [menuOpen, setMenuOpen] = useState(false);

  const handlemenuOpenClick = (): void => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div
        onClick={handlemenuOpenClick}
        className={`hidden md:flex fixed text-base transition-right duration-500 ease-in-out font-sans top-[45vh] origin-top-right transform rotate-90 px-5 py-3 ${
          menuOpen ? `right-full lg:right-1/2 2xl:right-1/3` : `right-0`
        }  rounded-b-md shadow-lg bg-blue-200 text-white cursor-pointer flex flex-row space-x-2 justify-center items-center z-10`}
      >
        <span className="rotate-180">Self Service</span>
        <MdKeyboardArrowDown
          className={`transition-rotate duration-500 ease-out ${
            menuOpen ? `rotate-180` : `rotate-0`
          }  h-6 w-6`}
        />
      </div>

      <div
        className={`fixed overflow-y-auto transition-right duration-500 ease-in-out ${
          menuOpen ? `right-0` : `-right-1/3`
        } top-0 h-full w-full lg:w-1/2 2xl:w-1/3 bg-blue-300 shadow-lg p-6 z-10`}
      >
        <div className="relative flex flex-col">
          <MdOutlineClose
            onClick={handlemenuOpenClick}
            className="absolute top-0 right-0 h-8 w-8 text-white cursor-pointer"
          />
          <div className="px-10 py-16 flex flex-col gap-20">
            <SideBarSection title="Self-Service" buttons={serviceButtons} />
            <SideBarSection title="Contact" buttons={contactButtons} />
          </div>
        </div>
      </div>
    </>
  );
}
