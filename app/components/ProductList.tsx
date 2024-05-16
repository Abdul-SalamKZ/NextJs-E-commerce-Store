import React from "react";
import Link from "next/link";
import { FaFilter } from "react-icons/fa6";
import Image from "next/image";
import { useQuery, gql } from "@apollo/client";
import { useSearchParams } from "next/navigation";
import glasses from "../../public/assets/Img/glasses.jpeg";

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
    catalogItems(
      shopIds: ["cmVhY3Rpb24vc2hvcDpGN2ZrM3plR3o4anpXaWZzQQ=="]
      tagIds: ["cmVhY3Rpb24vdGFnOlF2cmozWG95U3NvS1BkM3hL"]
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
                  }
                }
              }
            }
          }
        }
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
  const search = searchParams.get("tag");

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
              <li className="hover:text-red-500 transition-colors  duration-300 ease-in-out">
              <Link
                    scroll={false}
                    href="/"
                    className={`text-black mr-4 font-semibold hover:text-red-500 transition-colors  duration-300 ease-in-out`}>
                  All Products
                </Link>
              </li>
              {tagsData.tags.nodes.map((items: any) => {
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-9 lg:p-0  px-4 ">
          {tagsData.catalogItems.edges.map(({ node }:any) => (
            <div key={node.product._id} className="hover:shadow-xl">
              <Image className="w-full" src={glasses} alt="" />
              <div className="flex justify-between mx-3">
                <p className="py-3 font-bold flex">{node.product.title}</p>
                {node.product.pricing.map((price: { _id: React.Key | null | undefined; displayPrice: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }) => (
                  <p key={price._id} className="pl-3 pt-[14px]">
                    {price.displayPrice}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
