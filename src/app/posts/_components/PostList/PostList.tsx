"use client";

import React, { FC, useState } from "react";
import styles from "./PostList.module.scss";
import { GetAllPostsQuery } from "@/graphql/__types__";
import { loadMorePosts } from "../../_services/loadMorePosts";
import LoadMoreButton from "@/components/LoadMoreButton/LoadMoreButton";
import Link from "next/link";

export type PostData =
  | NonNullable<GetAllPostsQuery["posts"]>["data"]
  | undefined;

interface PostListProps {
  postsData: PostData;
}

const PostsList: FC<PostListProps> = ({ postsData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState<PostData>(postsData);

  if (!posts) {
    return <p>No posts</p>;
  }

  const handleClickLoadMorePosts = async () => {
    const nextPage = currentPage + 1;
    const morePosts = await loadMorePosts(nextPage);

    setCurrentPage(nextPage);

    if (morePosts && posts) {
      setPosts((prevPosts) => {
        return [...(prevPosts || []), ...morePosts];
      });
    }
  };

  return (
    <div className="listContainer">
      <ul className="list">
        {posts.map((post) => (
          <li className={styles.post} key={post?.id}>
            <Link href={`/posts/${post?.id}`}>
              <p>ID: {post?.id}</p>
              <p className={styles.postTitle}>{post?.title}</p>
              <p className={styles.postBody}>{post?.body}</p>
            </Link>
          </li>
        ))}
      </ul>
      <LoadMoreButton
        title="Load More Posts"
        loadMore={handleClickLoadMorePosts}
      />
    </div>
  );
};

export default PostsList;
