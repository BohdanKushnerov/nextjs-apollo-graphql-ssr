import { getClient } from "@/app/lib/client";
import { GetUserQuery, GetUserQueryVariables } from "@/graphql/__types__";
import { GetUserDocument } from "@/graphql/hooks/hooks";
import React from "react";
import styles from "./[id].module.scss";
import TurnBackButton from "@/components/TurnBackButton/TurnBackButton";
import UserItem from "../_components/UserItem/UserItem";

const UserPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const { data } = await getClient().query<GetUserQuery, GetUserQueryVariables>(
    {
      query: GetUserDocument,
      variables: {
        id,
      },
    }
  );

  return (
    <div className={styles.user}>
      <TurnBackButton />
      {!data?.user && <p>User data is failed</p>}
      {data?.user && <UserItem user={data.user} />}
    </div>
  );
};

export default UserPage;
