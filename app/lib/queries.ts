import { gql } from "@apollo/client";

   
const getPost = gql`
query {
    me {
     posts(pageSize: 10, page: 1, sortBy: DATE_PUBLISHED_DESC) {
       nodes {
         title,
         brief,
         slug,
         publishedAt,
         coverImage {
           attribution
           url
         },
         content{
           markdown
         }
         
       }
     }
   }
 }
`;

export {
    getPost
}