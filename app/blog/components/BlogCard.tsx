import { BlogPostData } from "@/types/blogTypes";
import Image from "next/image";
import React from "react";
import fallbackImg from "@/public/assets/gradient.webp";

type BlogCardProps = {
  post: BlogPostData;
};

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <div className="max-w-[600px] rounded-xl p-4 bg-cyan-200 bg-opacity-20 backdrop-blur-sm
    cursor-pointer hover:bg-opacity-40 transition duration-300 mx-auto">
      <Image
        src={post?.coverImage ? post?.coverImage.url : fallbackImg}
        alt={post?.coverImage?.attribution || "coverImage"}
        width={500}
        height={500}
        priority={true}
        className="w-full self-end mb-4"
      />
      <h2 className="font-medium mb-2">{post?.title}</h2>
      <p className="text-neutral-700 text-sm line-clamp-2 text-ellipsis overflow-hidden">{post?.brief}</p>
    </div>
  );
};

export default BlogCard;
