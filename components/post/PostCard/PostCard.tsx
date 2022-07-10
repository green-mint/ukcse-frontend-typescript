import Image from "next/image";
import Link from "next/link";
import React from "react";

export type PostCardProps = {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  author: string;
};

const PostCard = ({
  id,
  title,
  author,
  category,
  date,
  image,
}: PostCardProps) => {
  return (
    <div className={`group`}>
      <Link href={`/posts/${id}`}>
        <div className="relative overflow-hidden transition-all cursor-pointer bg-gray-100 rounded-md dark:bg-gray-800 hover:scale-105 aspect-square">
          <Image src={image} alt={title} layout="fill" className="" />
        </div>
      </Link>

      <div className="mt-3 cursor-pointer mb-1">
        <Link href={`/posts?category=${category.toLowerCase()}`}>
          <span className="text-xs text-emerald-600">
            {category.toUpperCase()}
          </span>
        </Link>
      </div>

      <div className="cursor-pointer">
        <Link href={`/posts/${id}`}>
          <span className="text-xl font-semibold">{title}</span>
        </Link>
      </div>

      <div className="flex mt-2 items-end space-x-2">
        <span className="text-xs text-slate-500">{author}</span>
        <div className="w-1 h-1 rounded-full bg-slate-300 my-auto"></div>
        <span className="text-xs font text-slate-500">{date}</span>
      </div>
    </div>
  );
};

export default PostCard;
