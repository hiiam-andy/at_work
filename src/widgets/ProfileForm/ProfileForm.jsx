import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { setIsActiveModal } from "../../app/store/modalSlice";

import Button from "../../shared/ui/Button";

import styles from "./ProfileForm.module.css";
import { editData } from "../../app/store/usersSlice";
import Modal from "../../shared/ui/Modal/Modal";

export default function ProfileForm() {
  const { data } = useSelector((state) => state.oneUser);
  const allData = useSelector((state) => state.users.data);
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
              placeholder={data.name}
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
              placeholder={data.username}
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
              placeholder={data.email}
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
              placeholder={data.address?.city}
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
              placeholder={data.phone}
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
              placeholder={data.company?.name}
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
      <Modal>Изменения сохранены!</Modal>
    </div>
  );
}
