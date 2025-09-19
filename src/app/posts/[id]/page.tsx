import { getClient } from "@/app/lib/client";
import { GetPostQuery, GetPostQueryVariables } from "@/graphql/__types__";
import { GetPostDocument } from "@/graphql/hooks/hooks";
import React from "react";
import styles from "./[id].module.scss";
import TurnBackButton from "@/components/TurnBackButton/TurnBackButton";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const { data } = await getClient().query<GetPostQuery, GetPostQueryVariables>(
    {
      query: GetPostDocument,
      variables: {
        id,
      },
    }
  );

  return (
    <div className={styles.post}>
      <TurnBackButton />
      <p className={styles.postId}>ID: {data?.post?.id}</p>
      <h1 className={styles.title}>{data?.post?.title}</h1>
      <p className={styles.body}>{data?.post?.body}</p>
    </div>
  );
};

export default Page;
