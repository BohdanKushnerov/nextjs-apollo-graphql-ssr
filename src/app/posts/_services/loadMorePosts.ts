"use server";

import { getClient } from "@/app/config/api";
import { QUANTITY_POSTS } from "@/app/constants/constants";
import {
  GetPostsQuery,
  GetPostsQueryVariables,
  PageQueryOptions,
} from "@/graphql/__types__";
import { GetPostsDocument } from "@/graphql/hooks/hooks";

export const loadMorePosts = async (page: number) => {
  const { data } = await getClient().query<
    GetPostsQuery,
    GetPostsQueryVariables
  >({
    query: GetPostsDocument,
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
