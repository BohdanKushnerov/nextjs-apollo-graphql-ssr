import React from "react";
import { getClient } from "../lib/client";
import {
  GetAllPhotosQuery,
  GetAllPhotosQueryVariables,
  PageQueryOptions,
} from "@/graphql/__types__";
import { QUANTITY_PHOTOS } from "../constants/constants";
import { GetAllPhotosDocument } from "@/graphql/hooks/hooks";
import PhotosList from "./_components/PostList/PhotosList";
import styles from "./Photos.module.scss";

const PhotosPage = async () => {
  const { data } = await getClient().query<
    GetAllPhotosQuery,
    GetAllPhotosQueryVariables
  >({
    query: GetAllPhotosDocument,
    variables: {
      options: {
        paginate: {
          page: 1,
          limit: QUANTITY_PHOTOS,
        },
      } as PageQueryOptions,
    },
  });

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Photos</h1>

      {data ? (
        <PhotosList photosData={data?.photos?.data} />
      ) : (
        <p>Error loading posts data</p>
      )}
    </main>
  );
};

export default PhotosPage;
