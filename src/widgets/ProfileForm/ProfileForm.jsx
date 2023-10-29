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
      <Modal>
        <svg
          width="61"
          height="60"
          viewBox="0 0 61 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.1087 1.19075C24.9151 -0.0170324 36.085 -0.0170324 46.8914 1.19075C50.9487 1.6442 54.5103 3.83827 56.7633 7.02464L28.7501 35.0378L20.1063 26.394C19.0812 25.3688 17.4191 25.3688 16.394 26.394C15.3688 27.4191 15.3688 29.0811 16.394 30.1063L26.894 40.6063C27.9191 41.6314 29.5812 41.6314 30.6063 40.6063L59.0103 12.2023C59.089 12.5857 59.1517 12.9751 59.1979 13.3698C60.4902 24.419 60.4902 35.5812 59.1979 46.6304C58.4459 53.0598 53.2838 58.095 46.8914 58.8095C36.085 60.0173 24.9151 60.0173 14.1087 58.8095C7.71635 58.095 2.55421 53.0598 1.80224 46.6304C0.509931 35.5812 0.509931 24.419 1.80224 13.3698C2.55421 6.94043 7.71636 1.90518 14.1087 1.19075Z"
            fill="#C6F4C6"
          />
        </svg>
        Изменения сохранены!
      </Modal>
    </div>
  );
}
