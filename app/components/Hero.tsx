import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import Product from "../../public/assets/Img/image-product.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-[#1E28320D]">
      <div className="container mx-auto pt-20 pb-[60px]">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
          <div className="flex items-center">
            <div className="roboto">
              <h1 className="text-7xl font-light">Collections</h1>
              <p className="text-3xl font-normal leading-[55px] my-[52px]">
              You Can Explore And Shop Many Different Collection From Various Brands Here.  
              </p>
              <button className="py-[19px] px-[26px] flex bg-black text-white text-[29px]">
                <FaShoppingBag className="mt-1 me-2" /> Shop Now
              </button>
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <Image src={Product} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
