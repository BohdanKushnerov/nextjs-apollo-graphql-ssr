import React from "react";
import { getClient } from "../lib/client";
import { GetAllUsersDocument } from "@/graphql/hooks/hooks";
import { GetAllUsersQuery, PageQueryOptions } from "@/graphql/__types__";
import UserList from "./_components/UserList/UserList";
import { QUANTITY_USERS } from "../constants/constants";

const UsersPage = async () => {
  const { data } = await getClient().query<GetAllUsersQuery>({
    query: GetAllUsersDocument,
    variables: {
      options: {
        paginate: {
          page: 1,
          limit: QUANTITY_USERS,
        },
      } as PageQueryOptions,
    },
  });

  data?.users;

  return (
    <div>
      <h1>Page Users</h1>
      {!data?.users?.data && <p>Error: User Not Found</p>}
      {data?.users?.data && <UserList usersData={data?.users?.data} />}
    </div>
  );
};

export default UsersPage;
