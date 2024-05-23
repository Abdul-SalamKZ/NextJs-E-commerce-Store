import React, { useState } from "react";
import Link from "next/link";
import { FaFilter } from "react-icons/fa6";
import Image from "next/image";
import { useQuery} from "@apollo/client"; 
import { gql } from "../../__generated__/gql";
import { useSearchParams } from "next/navigation";
import Food from "../../public/assets/Img/food.jpeg";

const GET_DATA = gql(/* GraphQL */ `
  query GetProducts($tagIds: [ID!]) {
    tags(shopId: "cmVhY3Rpb24vc2hvcDpGN2ZrM3plR3o4anpXaWZzQQ==") {
      nodes {
        _id
        name 
        displayTitle
        slug
      }
    }
    catalogItems(
      shopIds: ["cmVhY3Rpb24vc2hvcDpGN2ZrM3plR3o4anpXaWZzQQ=="]
      tagIds: $tagIds
    ) {
      edges {
        node {
          ... on CatalogItemProduct {
            product {
              title
              pricing {
                displayPrice
              }
              description
              _id
              variants {
                _id
                title
                media {
                  URLs {
                    small
                    large
                    thumbnail
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`);

const ProductList = () => {
  const [tagId, setTagId] = useState("");
  const {
    loading: Loading,
    error: Error,
    data: tagsData,
  } = useQuery(GET_DATA, {
    variables: { tagIds: tagId ? [tagId] : null }, 
  });

  const handelAllProductClick = () => {
    setTagId("");
  };

  const searchParams = useSearchParams();
  const search = searchParams.get("tag");

  const renderSkeletonLoading = () => (
    <div className="container mx-auto">
      <div className="flex justify-between mt-10 flex-wrap">
        <div>
          <ul className="flex gap-5 flex-wrap justify-between lg:text-base open-sans">
            {[...Array(6)].map((_, index) => (
              <li key={index} className="mr-5 h-6 bg-gray-200 w-24 animate-pulse"></li>
            ))}
          </ul>
        </div>
        <div>
          <button className="bg-black open-sans text-white flex py-[5px] px-[15px]">
            <FaFilter className="mt-1 me-2" />
            Filter
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-10 lg:p-0">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="rounded-lg bg-white shadow-md flex flex-col animate-pulse">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 flex-1"></div>
            <div className="p-6 flex-1">
              <div className="h-32 bg-gray-200 w-full mb-4"></div>
              <div className="h-12 bg-gray-200 w-2/4"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  if (Loading) return renderSkeletonLoading();
  if (Error) return <p>Error loading data...</p>;
  const tags = tagsData && tagsData.tags && tagsData.tags.nodes ? tagsData.tags.nodes : [];

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
              <li className="hover:text-red-500 transition-colors duration-300 ease-in-out">
                <Link
                  onClick={handelAllProductClick}
                  scroll={false}
                  href="/"
                  className="text-black mr-4 hover:text-red-500 transition-colors duration-300 ease-in-out"
                >
                  All Products
                </Link>
              </li>
              {tags.map((tag:any) => {
                const isActive = search === tag.slug;
                return (
                  <li className="mr-5" key={tag.name}>
                    <Link
                      scroll={false}
                      href={{ query: { tag: tag.slug } }}
                      className={`${
                        isActive ? "text-red-500" : ""
                      } text-black hover:text-red-500 transition-colors duration-300 ease-in-out`}
                      onClick={() => {
                        setTagId(tag._id);
                      }}
                    >
                      {tag.displayTitle}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-9 lg:p-0">
          {tagsData?.catalogItems?.edges?.map(({ node }:any) => (
            <div key={node.product._id} className="rounded-lg bg-white shadow-md hover:shadow-xl flex flex-col">
              <Image className="w-full" src={Food} alt="" />
              <div className="flex justify-between px-[3px] p-6 flex-1">
                <p className="py-3 font-medium text-sm flex">{node.product.title}</p>
                {node.product.pricing.map(
                  (price:any) => (
                    <p key={price._id} className="py-3 text-sm">
                      {price.displayPrice}
                    </p>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;