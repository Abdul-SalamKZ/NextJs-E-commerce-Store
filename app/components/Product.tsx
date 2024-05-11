import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaFilter } from "react-icons/fa6";
import Shorts from "../../public/assets/Img/shorts.png";
import Bag from "../../public/assets/Img/bag.jpeg";
import Scarf from "../../public/assets/Img/scarf.jpeg";
import Hoodie from "../../public/assets/Img/hoodie.jpeg";
import Dress from "../../public/assets/Img/dress.jpeg";
import Shoe from "../../public/assets/Img/shoe.jpeg";
import Jacket from "../../public/assets/Img/jecket.jpeg";
import Glasses from "../../public/assets/Img/glasses.jpeg";
import Image from "next/image";
import { useQuery, gql } from "@apollo/client";
import { useSearchParams } from "next/navigation";

const GET_TAGS = gql`
  query {
    tags(shopId: "cmVhY3Rpb24vc2hvcDpGN2ZrM3plR3o4anpXaWZzQQ==") {
      nodes {
        _id
        name
        displayTitle
        slug
      }
    }
  }
`;

const Product = () => {
  const {
    loading: tagsLoading,
    error: tagsError,
    data: tagsData,
  } = useQuery(GET_TAGS);

  const searchParams = useSearchParams();
  const search = searchParams.get ('tag')
  if (tagsLoading) return <p>Loading...</p>;
  if (tagsError) return <p>Error loading data...</p>;


  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div>
          <h1 className="text-[50px] text-center">
            Or subscribe to the newsletter
          </h1>
        </div>
        <div className="flex justify-between mt-10 flex-wrap">
          <div>
            <ul className="flex gap-5 flex-wrap justify-between lg:text-base open-sans">
              <li className="hover:text-red-500 transition-colors font-semibold duration-300 ease-in-out">
                <Link scroll={false} href={"#"}>
                  All Products
                </Link>
              </li>
              {tagsData.tags.nodes.map((items: any) => {
                // const isActive = search === items.name;
                const isActive = search === items.slug;
                return (
                  <li className="mr-5">
                    <Link
                      key={items.name}
                      scroll={false}
                      href={{ query: { tag: items.slug } }}
                      className={`${
                        isActive ? 'font-semibold text-black' : ""
                      } text-black  hover:text-red-500 transition-colors duration-300 ease-in-out`}>
                      {items.displayTitle}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <button className="bg-black open-sans text-white flex py-[5px] px-[15px]">
              <FaFilter className="mt-1 me-2" />
              Filter
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-9 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="hover:shadow-xl">
            <Image src={Shorts} alt="" className="w-full" />
            <div className="px-[10px] py-[18px] text-base roboto">
              Adicolor Classics Joggers
              <div className="flex justify-between">
                <span className="text-[#00000080]">Short</span>
                <span>$63.85</span>
              </div>
            </div>
          </div>
          <div className="hover:shadow-xl">
            <Image src={Bag} alt="" className="w-full" />
            <div className="px-[10px] py-[18px] text-base roboto">
              Nike Sportswear Futura Luxe
              <div className="flex justify-between">
                <span className="text-[#00000080]">Bag</span>
                <span>$130.00</span>
              </div>
            </div>
          </div>
          <div className="hover:shadow-xl">
            <Image src={Scarf} alt="" className="w-full" />
            <div className="px-[10px] py-[18px] text-base roboto">
              Geometric print Scarf
              <div className="flex justify-between">
                <span className="text-[#00000080]">scarf</span>
                <span>$53.00</span>
              </div>
            </div>
          </div>
          <div className="hover:shadow-xl">
            <Image src={Hoodie} alt="" className="w-full" />
            <div className="px-[10px] py-[18px] text-base roboto">
              Yellow Reserved Hoodie
              <div className="flex justify-between">
                <span className="text-[#00000080]">Dress</span>
                <span className="text-red-500">
                  <span className="line-through text-[#00000080]">$364.00</span>{" "}
                  $155.00
                </span>
              </div>
            </div>
          </div>
          <div className="hover:shadow-xl">
            <Image src={Dress} alt="" className="w-full" />
            <div className="px-[10px] py-[18px] text-base roboto">
              Basic Dress Green
              <div className="flex justify-between">
                <span className="text-[#00000080]">Dress</span>
                <span>$236.00</span>
              </div>
            </div>
          </div>
          <div className="hover:shadow-xl">
            <Image src={Shoe} alt="" className="w-full" />
            <div className="px-[10px] py-[18px] text-base roboto">
              Nike Air Zoom Pegasus
              <div className="flex justify-between">
                <span className="text-[#00000080]">shoe</span>
                <span className="text-red-500">
                  <span className="line-through text-[#00000080]">$220.00</span>{" "}
                  $198.00
                </span>
              </div>
            </div>
          </div>
          <div className="hover:shadow-xl">
            <Image src={Jacket} alt="" className="w-full" />
            <div className="px-[10px] py-[18px] text-base roboto">
              Nike Repel Miler
              <div className="flex justify-between">
                <span className="text-[#00000080]">Dress</span>
                <span>$120.50</span>
              </div>
            </div>
          </div>
          <div className="hover:shadow-xl">
            <Image src={Glasses} alt="" className="w-full" />
            <div className="px-[10px] py-[18px] text-base roboto">
              Nike Sportswear Futura Luxe
              <div className="flex justify-between">
                <span className="text-[#00000080]">Glasses</span>
                <span>$160.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
