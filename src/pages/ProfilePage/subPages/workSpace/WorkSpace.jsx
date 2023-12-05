import React from "react";
import { useSelector } from "react-redux";
import styles from "./WorkSpace.module.css";
import Button from "../../../../shared/ui/Button";
import { NavLink } from "react-router-dom";

export default function WorkSpace() {
  const { data } = useSelector((store) => store.oneUser);
  return (
    <div className="profile_container">
      <h1 className={styles.profile_heading}>{data.username}</h1>
      {/* <ul className={styles.profile_info}>
        <li className={styles.profile_item}>Имя: {data.name}</li>
        <li className={styles.profile_item}>email: {data.email}</li>
        <li className={styles.profile_item}>phone: {data.phone}</li>
        <li className={styles.profile_item}>Компания: {data?.company?.name}</li>
        <li className={styles.profile_item}>Адрес: {data?.address?.city}</li>
      </ul>
      <NavLink to={`/profile/${data.id}/form`}>
        <Button>Редактировать данные</Button>
      </NavLink> */}
    </div>
  );
}
