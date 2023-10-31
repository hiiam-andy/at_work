import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneUser } from "../../app/store/oneUserSlice";
import { NavLink, Outlet, useParams } from "react-router-dom";
import Sidebar from "../../widgets/Sidebar/Sidebar";
import mockAvatarFromServer from "../../shared/assets/images/maxresdefault.jpg";
import styles from "./ProfilePage.module.css";

export default function ProfilePage() {
  const { id } = useParams();
  const { isLoading } = useSelector((store) => store.oneUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOneUser(id));
  }, [dispatch, id]);

  return (
    <section className="container">
      <NavLink className={styles.back_link} to="/">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.25 9H0.75"
            stroke="#161616"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 14.25L0.75 9L6 3.75"
            stroke="#161616"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Назад
      </NavLink>
      {isLoading ? (
        <div>Загрузка...</div>
      ) : (
        <div className={styles.oneuser_page}>
          <Sidebar avatar={mockAvatarFromServer} />
          <Outlet />
        </div>
      )}
    </section>
  );
}
