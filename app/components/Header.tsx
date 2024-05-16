"use client";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import logo from "../../public/assets/Img/logo.png";
import Link from "next/link";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="py-8 px-2 mx-auto bg-[#1E28320D]">
      <nav>
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-5">
            <div className="lg:w-48">
              <IoIosSearch className="h-[25px] w-[25px]" />
            </div>
            <div className="mx-auto">
              <Image src={logo} alt="" />
            </div>
            <div className="hidden lg:flex">
              <span className="me-5">
                <a className="flex" href="#">
                  <IoMdPerson className="h-5 w-5 me-1" /> Account
                </a>
              </span>
              <span>
                <a className="flex" href="#">
                  <FaShoppingBag className="h-5 w-5 me-1" /> Shopping
                </a>
              </span>
            </div>
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-black border-black h-[25px] w-[25px]"
              >
                {isOpen ? (
                  <IoClose className="h-[25px] w-[25px]" />
                ) : (
                  <IoIosMenu className="h-[25px] w-[25px]" />
                )}
              </button>
            </div>
          </div>
          <hr className="text-[#E3E3E3]" />
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } lg:block mt-4 flex justify-center`}
          >
            <ul className="lg:flex justify-between lg:text-base  open-sans">
              <li className="hover:text-red-500 py-2  transition-colors duration-300 ease-in-out">
                <Link href={"#"}>Jewelry & Accessories</Link>
              </li>
              <li className="hover:text-red-500 py-2  transition-colors duration-300 ease-in-out">
                <Link href={"#"}>Clothing & Shoes</Link>
              </li>
              <li className="hover:text-red-500 py-2  transition-colors duration-300 ease-in-out">
                <Link href={"#"}>Home & Living</Link>
              </li>
              <li className="hover:text-red-500 py-2  transition-colors duration-300 ease-in-out">
                <Link href={"#"}>Wedding & Party</Link>
              </li>
              <li className="hover:text-red-500 py-2  transition-colors duration-300 ease-in-out">
                <Link href={"#"}>Toys & Entertainment</Link>
              </li>
              <li className="hover:text-red-500 py-2  transition-colors duration-300 ease-in-out">
                <Link href={"#"}>Art & Collectibles</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
