"use server";

import { getClient } from "@/app/lib/client";
import { QUANTITY_PHOTOS } from "@/constants/constants";
import {
  GetAllPhotosQuery,
  GetAllPhotosQueryVariables,
  PageQueryOptions,
} from "@/graphql/__types__";
import { GetAllPhotosDocument } from "@/graphql/hooks/hooks";

export const loadMorePhotos = async (page: number) => {
  const { data } = await getClient().query<
    GetAllPhotosQuery,
    GetAllPhotosQueryVariables
  >({
    query: GetAllPhotosDocument,
    variables: {
      options: {
        paginate: {
          page,
          limit: QUANTITY_PHOTOS,
        },
      } as PageQueryOptions,
    },
  });

  return data?.photos?.data;
};
