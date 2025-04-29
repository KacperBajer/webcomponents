'use client'
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { links } from "./Header";
import { usePathname } from "next/navigation";
import { IoMdClose } from "react-icons/io";

type Props = {
  handleClose: () => void
}

const MobileMenu = ({handleClose}: Props) => {

    const path = usePathname();
    const boxRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (boxRef.current && !boxRef.current.contains(e.target as Node)) {
          handleClose();
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

  return (
    <div onClick={handleClose} className="sm:hidden fixed left-0 top-0 w-full h-screen flex justify-end bg-black/20 z-30">
      <div onClick={(e) => e.stopPropagation()} ref={boxRef} className="w-full max-w-[300px] flex flex-col bg-white shadow-md p-4 relative">
        <button onClick={handleClose} className="ml-auto hover:cursor-pointer" >
          <IoMdClose className="text-xl text-gray-600" />
        </button>
        {links.map((item, index) => (
          <Link
            className={`px-2 py-1.5 hover:text-blue-600 font-normal hover:cursor-pointer transition-all duration-300 ease-in-out ${
              path === item.href ? "text-blue-600" : "text-gray-600"
            }`}
            key={index}
            href={item.href}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
