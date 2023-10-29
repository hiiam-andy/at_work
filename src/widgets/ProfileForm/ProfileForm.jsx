import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { setIsActiveModal } from "../../app/store/modalSlice";

import Modal from "../Modal/Modal";
import Button from "../../shared/ui/Button";

import styles from "./ProfileForm.module.css";
import { editData } from "../../app/store/usersSlice";

export default function ProfileForm() {
  const { data } = useSelector((state) => state.oneUser);
  const allData = useSelector((state) => state.users.data);
  const { isActiveModal } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  const editUser = (id, field, event) => {
    dispatch(
      editData(
        allData.map((user) => {
          if (user.id === id) {
            return { ...user, [field]: event.target.value };
          }
          return user;
        })
      )
    );
  };

  return (
    <div className="profile_container">
      <h1 className={styles.form_heading}>Данные профиля</h1>
      <form className={styles.form}>
        <p className={styles.form_item}>
          <label className={styles.form_label}>
            Имя
            <input
              className={styles.form_input}
              type="text"
              onChange={(e) => editUser(data.id, "name", e)}
            />
          </label>
        </p>
        <p className={styles.form_item}>
          <label className={styles.form_label}>
            Никнейм
            <input
              className={styles.form_input}
              type="text"
              onChange={(e) => editUser(data.id, "username", e)}
            />
          </label>
        </p>
        <p className={styles.form_item}>
          <label className={styles.form_label}>
            Почта
            <input
              className={styles.form_input}
              type="email"
              onChange={(e) => editUser(data.id, "email", e)}
            />
          </label>
        </p>
        <p className={styles.form_item}>
          <label className={styles.form_label}>
            Город
            <input
              className={styles.form_input}
              type="text"
              onChange={(e) => editUser(data.id, "address", e)}
            />
          </label>
        </p>
        <p className={styles.form_item}>
          <label className={styles.form_label}>
            Телефон
            <input
              className={styles.form_input}
              type="tel"
              onChange={(e) => editUser(data.id, "phone", e)}
            />
          </label>
        </p>
        <p className={styles.form_item}>
          <label className={styles.form_label}>
            Название компании
            <input
              className={styles.form_input}
              type="text"
              onChange={(e) => editUser(data.id, "company", e)}
            />
          </label>
        </p>
        <Button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            dispatch(setIsActiveModal(true));
          }}
        >
          Сохранить
        </Button>
      </form>
      <Modal isActiveModal={isActiveModal}>Изменения сохранены!</Modal>
    </div>
  );
}
