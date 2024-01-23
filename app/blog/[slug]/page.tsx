import { getClient } from "@/app/lib/graphQlClient";
import { getPost } from "@/app/lib/queries";
import { BlogPostData } from "@/types/blogTypes";
import { notFound } from "next/navigation";
import React from "react";
import MarkdownRenderer from "./components/MarkdownBlock";
import Image from "next/image";

type PostProps = {
  params: {
    slug: string;
  };
};

// this function is used to generate static paths for the dynamic routes
export async function generateStaticParams() {
  const client = getClient();
  const { data } = await client.query({ query: getPost });
  return data?.me?.posts?.nodes?.map((post: BlogPostData) => ({
    slug: post?.slug,
  }));
}

const PostPage = async ({ params }: PostProps) => {
  // checking if the post exists and if not, return 404
  const client = getClient();
  const { data } = await client.query({ query: getPost });
  const post = data?.me?.posts?.nodes?.find(
    (post: BlogPostData) => post?.slug === params?.slug
  );
  if (!post) return notFound();

  return (
    <article className="max-w-7xl mx-auto p-4 lg:p-8">
      <h1>{post?.title}</h1>
      <Image
      src={post?.coverImage?.url}
      alt={post?.coverImage?.attribution}
      width={1000}
      height={800}
      />
      <p>{post?.brief}</p>
      <MarkdownRenderer content={post?.content?.markdown} />
    </article>
  );
};

export default PostPage;
