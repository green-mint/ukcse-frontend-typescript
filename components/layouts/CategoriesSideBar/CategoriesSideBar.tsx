import { useQuery } from "@apollo/client";
import Link from "next/link";
import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { GetCategories } from "../../../lib/graphql/interfaces/GetCategories";
import { GET_CATEGORY } from "../../../lib/graphql/operations";
// import { FaTwitterSquare } from 'react-icons/fa';


const CategoriesSideBar = ({  }) => {
  return (
    <div className="lg:fixed lg:flex flex-col h-screen top-0 w-64 hidden bg-black">
      <div className="mt-32">
        <SocialLinks />
      </div>

      <div className="text-center mt-8">
        <PopularArticles />
      </div>

      <div className="text-center mt-10">
        <CategoriesList />
      </div>
    </div>
  );
};

function SocialLinks() {
  return (
    <div className="flex justify-center space-x-3">
      <a href="https://www.facebook.com/">
        <FaFacebookSquare className="text-white text-3xl" />
      </a>

      <a href="https://www.twitter.com/">
        <FaTwitterSquare className="text-white text-3xl" />
      </a>

      <a href="https://www.instagram.com/">
        <FaInstagramSquare className="text-white text-3xl" />
      </a>
    </div>
  );
}

function PopularArticles() {
  return (
    <Link href="/popular">
      {/* <div className="bg-gray-800/40 backdrop-blur ring-1 ring-inset ring-gray-500/20 h-28 w-64 mx-auto rounded-lg flex cursor-context-menu"> */}
      <div className="m-auto text-gray-200 cursor-pointer">
        <div className="group text-gray-200 text-xl font-bold hover:text-neutral-600 transition ease-in-out duration-200">
          Popular Posts
          <span
            aria-hidden="true"
            className="inline-block translate-x-0 group-hover:translate-x-1 transition-transform ease-in-out duration-200">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}

function CategoriesList({ }) {
  const { loading, error, data } = useQuery<GetCategories>(GET_CATEGORY);

  if (error) return <div>Error!</div>;

  return loading ? (
    <div>Loading...</div>
  ) : (
    <>
      <h3 className="text-xl font-bold text-white">Categories</h3>
      <div className="space-y-3 mx-auto hide-scollbar mt-6 w-fit h-11/12 overflow-y-scroll">
        {data?.categories.map((category, index) => (
          <Link key={index} href={`/posts?category=${category?.toLowerCase()}`}>
            <div className="w-full cursor-pointer text-black bg-white hover:text-white hover:bg-black border border-white font-bold mx-auto p-1 px-2 rounded-md ring-1 ring-gray-900">
              {category?.replace(/./, (c) => c.toUpperCase())}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default CategoriesSideBar;
