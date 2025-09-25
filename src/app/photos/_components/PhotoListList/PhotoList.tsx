"use client";

import React, { FC, useState } from "react";
import { GetAllPhotosQuery } from "@/graphql/__types__";
import LoadMoreButton from "@/components/LoadMoreButton/LoadMoreButton";
import { loadMorePhotos } from "../../_services/loadMorePhotos";
import { getRandomPicsumUrl } from "../../_utils/getRandomPicsumUrl";
import PhotoItem from "../PhotoItem/PhotoItem";

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
    <div className="listContainer">
      <ul className="list">
        {photos.map((photo) => (
          <PhotoItem photo={photo} />
        ))}
      </ul>
      <LoadMoreButton
        title="Load More Photos"
        loadMore={handleClickLoadMorePosts}
      />
    </div>
  );
};

export default PhotosList;
