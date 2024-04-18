import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const postsApi =  createApi({
  reducerPath:'posts',
  baseQuery: fetchBaseQuery({
    baseUrl:'https://jsonplaceholder.typicode.com'
  }),
  endpoints:(build)=> ({
    getPosts: build.query<{ posts: IPost[], page: number }, number>({
      query:(page)=> {
        return ({
            url:'/posts',
            method: 'GET',
            params: {
              _start: page,
              _limit: 10,
            }
          })
      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      transformResponse: (response: IPost[], _meta, arg) => {
        return {
          posts: response,
          page: arg,
        };
      },
      merge: (currentCache, newItems) => {
        if (currentCache.page < newItems.page) {
          currentCache.posts.push(...newItems.posts);
          return currentCache;
        }
        return newItems;
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    fetchPostById: build.query({
      query(id ) {
        return {
          url: `/posts/${id}`,
          method: 'GET'
        };
      }
    })
  })
})

export const { useGetPostsQuery, useFetchPostByIdQuery} = postsApi;
