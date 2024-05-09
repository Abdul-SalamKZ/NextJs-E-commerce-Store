import React from "react";
import Image from "next/image";
import logo from "../../public/assets/Img/logo.png";
import Payment from "../../public/assets/Img/icons_payment 1.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdArrowUpward } from "react-icons/md";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto py-8 flex flex-col md:flex-row justify-between">
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <div className="mb-4">
            <Image src={logo} alt="Logo" />
          </div>
          <p className="text-sm text-gray-600 max-w-xs text-center md:text-left">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non cupiditate quae nam molestias.
          </p>
          <ul className="flex gap-6 mt-4">
            <li>
              <Link href="#" className="text-black">
                <span className="sr-only">Facebook</span>
                <FaFacebookF className="h-6 w-6" />
              </Link>
            </li>
            <li>
              <Link href="#" className="text-black">
                <span className="sr-only">Instagram</span>
                <FaTwitter className="h-6 w-6" />
              </Link>
            </li>
            <li>
              <Link href="#" className="text-black">
                <span className="sr-only">Twitter</span>
                <FaLinkedinIn className="h-6 w-6" />
              </Link>
            </li>
            <li>
              <Link href="#" className="text-black">
                <span className="sr-only">GitHub</span>
                <FaInstagram className="h-6 w-6" />
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col mb-6 md:mb-0">
          <p className="font-medium text-gray-900">CATALOG</p>
          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <Link href="#" className="text-black">
                Necklaces
              </Link>
            </li>
            <li>
              <Link href="#" className="text-black">
                Hoodies
              </Link>
            </li>
            <li>
              <Link href="#" className="text-black">
                Jewelry Box
              </Link>
            </li>
            <li>
              <Link href="#" className="text-black">
                T-Shirt
              </Link>
            </li>
            <li>
              <Link href="#" className="text-black">
                Jacket
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col mb-6 md:mb-0">
          <p className="font-medium text-gray-900">ABOUT US</p>
          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <Link href="#" className="text-black">
                Our Producers
              </Link>
            </li>
            <li>
              <Link href="#" className="text-black">
                Sitemap
              </Link>
            </li>
            <li>
              <Link href="#" className="text-black">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="#" className="text-black">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="text-black">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <p className="font-medium text-gray-900">CUSTOMER SERVICES</p>
          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <Link href="#" className="text-black">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="#" className="text-black">
                Track Your Order
              </Link>
            </li>
            <li>
              <Link href="#" className="text-black">
                Product Care & Repair
              </Link>
            </li>
            <li>
              <Link href="#" className="text-black">
                Book an Appointment
              </Link>
            </li>
            <li>
              <Link href="#" className="text-black">
                Shipping & Returns
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-black mt-8">
           <div className="container justify-around flex-wrap flex mx-auto h-[auto]">
             <h5 className="text-white mt-[15px] mb-[15px]">
               © 2022 Coral , Inc.
             </h5>
            <Image
              className="h-[24px] mt-[15px] mb-[15px]"
              src={Payment}
              alt="Logo"
            />
            <h6 className="text-white mt-[15px] mb-[15px] flex">
              Scroll to top <MdArrowUpward className="mt-1" />
            </h6>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
