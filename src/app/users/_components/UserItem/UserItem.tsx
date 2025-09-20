import { GetAllUsersQuery } from "@/graphql/__types__";
import React, { FC } from "react";
import styles from "./UserItem.module.scss";

interface UserItemProps {
  user: NonNullable<NonNullable<GetAllUsersQuery["users"]>["data"]>[number];
}

const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <div className={styles.userItem} key={user?.id}>
      <p>ID: {user?.id}</p>
      <p>Username: {user?.username}</p>
      <p>Email: {user?.email}</p>
      <p>Address lat: {user?.address?.geo?.lat}</p>
      <p>Address lng: {user?.address?.geo?.lng}</p>
    </div>
  );
};

export default UserItem;
