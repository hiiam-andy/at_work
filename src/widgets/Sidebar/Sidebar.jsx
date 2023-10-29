import React from "react";
import styles from "./Sidebar.module.css";
import { NavLink, useParams } from "react-router-dom";

export default function Sidebar({ avatar }) {
  const { id } = useParams();
  return (
    <div className={styles.sidebar}>
      <img src={avatar} alt="ava" className={styles.sidebar_image} />
      <ul>
        <li className={styles.sidebar_item}>
          <NavLink
            to={`/profile/${String(id)}/form`}
            className={({ isActive }) =>
              `${styles.sidebar_link} ${isActive && styles.active}`
            }
          >
            Данные профиля
          </NavLink>
        </li>
        <li className={styles.sidebar_item}>
          <NavLink
            to={`/profile/${String(id)}/work`}
            className={({ isActive }) =>
              `${styles.sidebar_link} ${isActive && styles.active}`
            }
          >
            Рабочее пространство
          </NavLink>
        </li>
        <li className={styles.sidebar_item}>
          <NavLink
            to={`/profile/${String(id)}/privacy`}
            className={({ isActive }) =>
              `${styles.sidebar_link} ${isActive && styles.active}`
            }
          >
            Приватность
          </NavLink>
        </li>
        <li className={styles.sidebar_item}>
          <NavLink
            to={`/profile/${String(id)}/safety`}
            className={({ isActive }) =>
              `${styles.sidebar_link} ${isActive && styles.active}`
            }
          >
            Безопасность
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
