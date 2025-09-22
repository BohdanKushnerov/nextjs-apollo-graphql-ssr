"use client";

import React, { FC, useState } from "react";
import { GetAllPhotosQuery } from "@/graphql/__types__";
import LoadMoreButton from "@/components/LoadMoreButton/LoadMoreButton";
import Link from "next/link";
import { loadMorePhotos } from "../../_services/loadMorePhotos";
import Image from "next/image";
import { getRandomPicsumUrl } from "../../_utils/getRandomPicsumUrl";
import styles from "./PhotosList.module.scss";

export type PhotosData =
  | NonNullable<GetAllPhotosQuery["photos"]>["data"]
  | undefined;

interface PostListProps {
  photosData: PhotosData;
}

export type PhotoWithLocalUrl = {
  id: string | null;
  title: string | null;
  url: string | null;
  localUrl: string;
};

export type ChangedPhotosData = PhotoWithLocalUrl[] | undefined;

const PhotosList: FC<PostListProps> = ({ photosData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [photos, setPhotos] = useState<ChangedPhotosData>(
    photosData?.map((p) => ({
      id: p?.id ?? null,
      title: p?.title ?? null,
      url: p?.url ?? null,
      localUrl: getRandomPicsumUrl(100),
    }))
  );

  if (!photos) {
    return <p>No photos</p>;
  }

  const handleClickLoadMorePosts = async () => {
    const nextPage = currentPage + 1;
    const morePhotos = await loadMorePhotos(nextPage);

    setCurrentPage(nextPage);

    if (morePhotos && photos) {
      const newPhotos = morePhotos.map((p) => ({
        id: p?.id ?? null,
        title: p?.title ?? null,
        url: p?.url ?? null,
        localUrl: getRandomPicsumUrl(100),
      }));

      setPhotos((prevPhotos) => [...(prevPhotos || []), ...newPhotos]);
    }
  };

  return (
    <>
      <ul className={styles.photosList}>
        {photos.map((photo) => (
          <li key={photo?.id} className={styles.photoItem}>
            <Link href={`/photos/${photo?.id}`}>
              <p className={styles.text}>Photo id: {photo?.id}</p>
              <p className={styles.text}>Photo title: {photo?.title}</p>
              <p className={styles.text}>
                Photo url - api photo not working!!!: {photo?.url}
              </p>
              {photo?.url && (
                <Image
                  src={photo.localUrl || getRandomPicsumUrl(100)}
                  alt={photo.url}
                  width={100}
                  height={100}
                />
              )}
            </Link>
          </li>
        ))}
      </ul>
      <LoadMoreButton
        title="Load More Photos"
        loadMore={handleClickLoadMorePosts}
      />
    </>
  );
};

export default PhotosList;
