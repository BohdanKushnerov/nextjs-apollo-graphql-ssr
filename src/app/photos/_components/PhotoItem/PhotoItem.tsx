import React, { FC } from "react";
import styles from "./PhotoItem.module.scss";
import Link from "next/link";
import Image from "next/image";
import { PhotoWithLocalUrl } from "../PhotoListList/PhotoList";
import { getRandomPicsumUrl } from "../../_utils/getRandomPicsumUrl";

interface PhotoItemProps {
  photo: PhotoWithLocalUrl;
}

const PhotoItem: FC<PhotoItemProps> = ({ photo }) => {
  return (
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
  );
};

export default PhotoItem;
