import React from "react";
import Avatar from "../../shared/assets/images/maxresdefault.jpg";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <img src={Avatar} alt="ava" className={styles.sidebar_image} />
      <ul>
        <li className={styles.sidebar_item}>Данные профиля</li>
        <li className={styles.sidebar_item}>Рабочее пространство</li>
        <li className={styles.sidebar_item}>Приватность</li>
        <li className={styles.sidebar_item}>Безопасность</li>
      </ul>
    </div>
  );
}
