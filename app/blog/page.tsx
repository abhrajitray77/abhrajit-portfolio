import React from "react";
import { getClient } from "../lib/graphQlClient";
import { getPost } from "../lib/queries";
import BlogCard from "./components/BlogCard";
import Link from "next/link";
import { BlogPostData } from "@/types/blogTypes";

const blog = async () => {
  const client = getClient();
  const { data } = await client.query({ query: getPost });
  //console.log(data.me.posts.nodes);

  return (
    <div className="max-w-6xl mx-auto px-4 lg:px-10 py-4">
      <h1 className="flex justify-center text-4xl font-semibold text-neutral-700 mb-4 uppercase">
        Blog
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data?.me?.posts?.nodes?.map((post: BlogPostData, index: number) => {
          return (
            <li key={index}>
              <Link
                href={`/blog/${post?.slug}`}
                aria-label={`${post?.title} ${post?.brief} ${post?.publishedAt}`}
              >
                <BlogCard post={post} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default blog;
