import React, { useEffect } from "react";
import UserCard from "../userCard/UserCard";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "../../shared/assets/images/maxresdefault.jpg";
import styles from "./UserList.module.css";
import { setIsActive, setIsArchived } from "../../app/store/usersSlice";

export default function UserList() {
  const { isArchived, archivedArray, isActive, isLoading, data } = useSelector(
    (store) => store.users
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsActive(archivedArray));
    dispatch(setIsArchived(archivedArray));
  }, [dispatch, archivedArray, data]);

  const active = isActive.map((user) => (
    <UserCard
      key={user.id}
      id={user.id}
      name={user.name}
      city={user?.address?.city}
      companyName={user?.company?.name}
      image={Avatar}
    />
  ));
  const archive = isArchived.map((user) => (
    <UserCard
      key={user.id}
      id={user.id}
      name={user.name}
      city={user?.address?.city}
      companyName={user?.company?.name}
      image={Avatar}
      isArchived={isArchived}
    />
  ));

  return (
    <div className={styles.user_list}>
      <div className={styles.user_list__section}>
        <h1 className={styles.section_heading}>Активные</h1>
        {!isLoading && isActive.length === 0 && <h3>Нет активных</h3>}
        {isLoading ? (
          <div>Загрузка</div>
        ) : (
          <div className={styles.user_list__field}>{active}</div>
        )}
      </div>
      {isArchived.length > 0 && (
        <div className={styles.user_list__section}>
          <h1 className={styles.section_heading}>Архив</h1>
          <div className={styles.user_list__field}>{archive}</div>
        </div>
      )}
    </div>
  );
}
