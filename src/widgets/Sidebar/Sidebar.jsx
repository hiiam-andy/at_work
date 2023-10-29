import React from "react";
import styles from "./Sidebar.module.css";
import { Link, useParams } from "react-router-dom";

export default function Sidebar({ avatar }) {
  const { id } = useParams();
  return (
    <div className={styles.sidebar}>
      <img src={avatar} alt="ava" className={styles.sidebar_image} />
      <ul>
        <li className={styles.sidebar_item}>
          <Link
            to={`/profile/${String(id)}/form`}
            className={styles.sidebar_link}
          >
            Данные профиля
          </Link>
        </li>
        <li className={styles.sidebar_item}>
          <Link
            to={`/profile/${String(id)}/work`}
            className={styles.sidebar_link}
          >
            Рабочее пространство
          </Link>
        </li>
        <li className={styles.sidebar_item}>
          <Link
            to={`/profile/${String(id)}/privacy`}
            className={styles.sidebar_link}
          >
            Приватность
          </Link>
        </li>
        <li className={styles.sidebar_item}>
          <Link
            to={`/profile/${String(id)}/safety`}
            className={styles.sidebar_link}
          >
            Безопасность
          </Link>
        </li>
        <li className={styles.sidebar_item}>
          <Link
            to={`/profile/${String(id)}/task`}
            className={styles.sidebar_link}
          >
            Задание
          </Link>
        </li>
      </ul>
    </div>
  );
}
