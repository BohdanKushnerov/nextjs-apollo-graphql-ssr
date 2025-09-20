import React from "react";
import { getClient } from "../lib/client";
import { GetAllUsersDocument } from "@/graphql/hooks/hooks";
import { GetAllUsersQuery } from "@/graphql/__types__";
import UserList from "./_components/UserList/UserList";

const UsersPage = async () => {
  const { data } = await getClient().query<GetAllUsersQuery>({
    query: GetAllUsersDocument,
  });

  data?.users;

  return (
    <div>
      <h1>Page Users</h1>
      {!data?.users?.data && <p>Error: User Not Found</p>}
      {data?.users?.data && <UserList users={data?.users?.data} />}
    </div>
  );
};

export default UsersPage;
