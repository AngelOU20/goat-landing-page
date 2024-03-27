"use client";

import Logo from "@/public/goat_logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

const links = [
  { name: "Inicio", link: "#home" },
  { name: "Servicios", link: "#service" },
  { name: "Sobre nosotros", link: "#about" },
  { name: "Habitaciones", link: "#rooms" },
];

export const Navbar = () => {
  let [open, setOpen] = useState(false);

  return (
    <div className="bg-primary w-full h-20 fixed top-0 left-0">
      <div className="pl-4 md:pl-0 md:max-w-screen-2xl mx-auto md:flex items-center justify-between py-6">
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <Image src={Logo} alt="Logo" height={50} width={50} />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-primary md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {links.map((link) => (
            <li key={link.name} className="md:ml-8 md:my-0 my-7 font-medium">
              <a
                href={link.link}
                className="text-gray-700 hover:text-secondary duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
