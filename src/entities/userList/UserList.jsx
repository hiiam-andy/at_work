import React from "react";
import UserCard from "../userCard/UserCard";
import { useSelector } from "react-redux";
import Avatar from "../../shared/assets/images/maxresdefault.jpg";
import styles from "./UserList.module.css";

export default function UserList() {
  const data = useSelector((store) => store.users.data);

  const res = data.map((user) => (
    <UserCard
      key={user.id}
      id={user.id}
      name={user.name}
      city={user?.address?.city}
      companyName={user?.company?.name}
      image={Avatar}
    />
  ));

  return <div className={styles.user_list}>{res}</div>;
}
