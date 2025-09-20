"use client";

import { GetAllUsersQuery } from "@/graphql/__types__";
import React, { FC, useState } from "react";
import UserItem from "../UserItem/UserItem";
import styles from "./UserList.module.scss";
import Link from "next/link";
import { loadMoreUsers } from "../../_services/loadMoreUsers";
import LoadMoreButton from "@/components/LoadMoreButton/LoadMoreButton";

interface UserListProps {
  usersData: NonNullable<GetAllUsersQuery["users"]>["data"];
}

const UserList: FC<UserListProps> = ({ usersData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [users, setUsers] = useState<UserListProps["usersData"]>(usersData);

  if (!users) {
    return <p>No users</p>;
  }

  const handleClickLoadMoreUsers = async () => {
    const nextPage = currentPage + 1;
    const moreUsers = await loadMoreUsers(nextPage);

    setCurrentPage(nextPage);

    if (moreUsers && users) {
      setUsers((prevUsers) => {
        return [...(prevUsers || []), ...moreUsers];
      });
    }
  };

  return (
    <div className={styles.userList}>
      <ul>
        {users?.map((user) => (
          <li key={user?.id}>
            <Link href={`/users/${user?.id}`}>
              <UserItem user={user} />
            </Link>
          </li>
        ))}
      </ul>
      <LoadMoreButton
        title="Load More Users"
        loadMore={handleClickLoadMoreUsers}
      />
    </div>
  );
};

export default UserList;
