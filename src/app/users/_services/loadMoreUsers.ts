"use server";

import { getClient } from "@/app/lib/client";
import { QUANTITY_USERS } from "@/constants/constants";
import {
  GetAllUsersQuery,
  GetAllUsersQueryVariables,
  PageQueryOptions,
} from "@/graphql/__types__";
import { GetAllUsersDocument } from "@/graphql/hooks/hooks";

export const loadMoreUsers = async (page: number) => {
  const { data } = await getClient().query<
    GetAllUsersQuery,
    GetAllUsersQueryVariables
  >({
    query: GetAllUsersDocument,
    variables: {
      options: {
        paginate: {
          page,
          limit: QUANTITY_USERS,
        },
      } as PageQueryOptions,
    },
  });

  return data?.users?.data;
};
