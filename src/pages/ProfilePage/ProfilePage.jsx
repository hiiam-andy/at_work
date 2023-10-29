import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneUser } from "../../app/store/oneUserSlice";
import {
  Link,
  NavLink,
  Outlet,
  useNavigate,
  useParams,
} from "react-router-dom";
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
    <div className="container">
      <NavLink className={styles.back_link} to="/">
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
    </div>
  );
}
