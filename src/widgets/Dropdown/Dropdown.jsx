import React from "react";
import styles from "./Dropdown.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeCard, setArchivedArray } from "../../app/store/usersSlice";

export default function Dropdown({ id, isArchived, isActive, showDropdown }) {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { archivedArray } = useSelector((state) => state.users);

  const addToArchive = (e, id) => {
    e.preventDefault();
    if (!archivedArray.includes(id)) {
      dispatch(setArchivedArray([...archivedArray, id]));
    } else {
      dispatch(setArchivedArray(archivedArray.filter((el) => el !== id)));
    }
    showDropdown();
  };

  return (
    <div className={`${styles.dropdown_wrapper} ${!isActive && styles.active}`}>
      <ul className={`${styles.dropdown} ${!isActive && styles.active}`}>
        {isArchived ? (
          <li
            onClick={(e) => addToArchive(e, id)}
            className={styles.dropdown_item}
          >
            Активировать
          </li>
        ) : (
          <>
            <li
              onClick={(e) => {
                e.preventDefault();
                navigate(`/profile/${id}/form`);
              }}
              className={styles.dropdown_item}
            >
              Редактировать
            </li>
            <li
              onClick={(e) => addToArchive(e, id)}
              className={styles.dropdown_item}
            >
              Архивировать
            </li>
            <li
              className={styles.dropdown_item}
              onClick={(e) => {
                dispatch(removeCard(id));
                e.preventDefault();
              }}
            >
              Скрыть
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
