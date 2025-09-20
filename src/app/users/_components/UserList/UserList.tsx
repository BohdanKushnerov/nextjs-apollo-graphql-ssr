import { GetAllUsersQuery } from "@/graphql/__types__";
import React, { FC } from "react";
import UserItem from "../UserItem/UserItem";
import styles from "./UserList.module.scss";
import Link from "next/link";

interface UserListProps {
  users: NonNullable<GetAllUsersQuery["users"]>["data"];
}

const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <div className={styles.userList}>
      <ul>
        {users?.map((user) => (
          <li>
            <Link href={`/users/${user?.id}`}>
              <UserItem key={user?.id} user={user} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
