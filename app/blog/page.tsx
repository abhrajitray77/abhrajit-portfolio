import React from 'react'
import { getClient } from '../lib/graphQlClient';
import { getPost } from '../lib/queries';

const blog = async () => {
    const client = getClient();
    const {data} = await client.query({ query: getPost });
    console.log(data.me.posts);

  return (
    <div>
        <h1>Blog</h1>
        <div>
          {
            data.me.posts.nodes.map((post:any) => {
              return (
                <div key={post._id}>
                  <h2>{post.title}</h2>
                  <p>{post.brief}</p>
                </div>
              )
            })
          }
        </div>

    </div>
  )
}

export default blog