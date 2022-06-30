import Image from "next/image";
import Link from "next/link";
import React from "react";
import Avatar from "../../../assets/images/avatar.png";

export type PostCardProps = {
  title: string;
  category: string;
  date: string;
  image: string;
  author: string;
  // size?: "xs" | "sm" | "md" | "lg" | "xl";
}

const PostCard = ({ title, author, category, date, image }: PostCardProps) => {
  return (
    <div className={`cursor-pointer group`}>
      <div className="relative overflow-hidden transition-all bg-gray-100 rounded-md dark:bg-gray-800 hover:scale-105 aspect-square">
        <Image src={image} alt={title} layout="fill" className="" />
      </div>

      <div className="mt-3 mb-1">
        <Link href={`/posts?category=${category}`}>
          <span className="text-xs text-emerald-600">{category.toUpperCase()}</span>
        </Link>
      </div>

      <div>
        <Link href={`/posts?category=${category}`}>
          <span className="text-xl font-semibold">
            {title}
          </span>
        </Link>
      </div>

      <div className="flex mt-2 items-end space-x-2">
        <span className="text-xs text-slate-400">{author}</span>
        <div className="w-1 h-1 rounded-full bg-slate-200 my-auto"></div>
        <span className="text-xs font text-slate-400">{date}</span>
      </div>


    </div>
  );
};

export default PostCard;

