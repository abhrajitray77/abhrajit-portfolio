import React from 'react'
import { getClient } from '../lib/graphQlClient';
import { getPost } from '../lib/queries';
import BlogCard from './components/BlogCard';

const blog = async () => {
    const client = getClient();
    const {data} = await client.query({ query: getPost });
    //console.log(data.me.posts);

  return (
    <div className="max-w-6xl mx-auto px-4 lg:px-10 py-4">
        <h1 className="flex justify-center text-4xl font-semibold text-neutral-700 mb-4 uppercase">
          Blog
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {
            data.me.posts.nodes.map((post:any, index: number) => {
              return (
                <BlogCard key={index} post={post} />
              )
            })
          }
        </div>

    </div>
  )
}

export default blog