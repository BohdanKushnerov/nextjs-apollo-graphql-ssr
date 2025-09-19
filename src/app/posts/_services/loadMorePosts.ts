"use server";

import { getClient } from "@/app/lib/client";
import { QUANTITY_POSTS } from "@/app/constants/constants";
import {
  GetAllPostsQuery,
  GetAllPostsQueryVariables,
  PageQueryOptions,
} from "@/graphql/__types__";
import { GetAllPostsDocument } from "@/graphql/hooks/hooks";

export const loadMorePosts = async (page: number) => {
  const { data } = await getClient().query<
    GetAllPostsQuery,
    GetAllPostsQueryVariables
  >({
    query: GetAllPostsDocument,
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
