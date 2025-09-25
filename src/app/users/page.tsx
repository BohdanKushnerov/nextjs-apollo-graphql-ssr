import React from "react";
import { getClient } from "../lib/client";
import { GetAllUsersDocument } from "@/graphql/hooks/hooks";
import { GetAllUsersQuery, PageQueryOptions } from "@/graphql/__types__";
import UserList from "./_components/UserList/UserList";
import { QUANTITY_USERS } from "../../constants/constants";
import clsx from "clsx";

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
    <main className={clsx("container", "container-wide")}>
      <h1 className="title">Page Users</h1>
      {!data?.users?.data && <p>Error: User Not Found</p>}
      {data?.users?.data && <UserList usersData={data?.users?.data} />}
    </main>
  );
};

export default UsersPage;
