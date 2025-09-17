"use server";

import { getClient } from "@/app/config/api";
import { QUANTITY_POSTS } from "@/app/constants/constants";
import {
  GetPostsQuery,
  GetPostsQueryVariables,
  PageQueryOptions,
} from "@/graphql/__types__";
import { GET_POSTS } from "@/graphql/queries/getPosts";

export const loadMorePosts = async (page: number) => {
  const { data } = await getClient().query<
    GetPostsQuery,
    GetPostsQueryVariables
  >({
    query: GET_POSTS,
    variables: {
      options: {
        paginate: {
          page,
          limit: QUANTITY_POSTS,
        },
      } as PageQueryOptions,
    },
  });

  return data?.posts?.data;
};
