import React from "react";

import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsActive } from "../../app/store/modalSlice";

import Modal from "../Modal/Modal";
import Button from "../../shared/ui/Button";

import styles from "./ProfileForm.module.css";

export default function ProfileForm() {
  const dispatch = useDispatch();
  const id = useParams();

  return (
    <div className="profile_container">
      <h1 className={styles.form_heading}>Данные профиля</h1>
      <form className={styles.form}>
        <p className={styles.form_item}>
          <label htmlFor="name" className={styles.form_label}>
            Имя
          </label>
          <input className={styles.form_input} type="text" id="name" required />
        </p>
        <p className={styles.form_item}>
          <label htmlFor="nickname" className={styles.form_label}>
            Никнейм
          </label>
          <input
            className={styles.form_input}
            type="text"
            id="nickname"
            required
          />
        </p>
        <p className={styles.form_item}>
          <label htmlFor="email" className={styles.form_label}>
            Почта
          </label>
          <input
            className={styles.form_input}
            type="email"
            id="email"
            required
          />
        </p>
        <p className={styles.form_item}>
          <label htmlFor="city" className={styles.form_label}>
            Город
          </label>
          <input className={styles.form_input} type="text" id="city" required />
        </p>
        <p className={styles.form_item}>
          <label htmlFor="phone" className={styles.form_label}>
            Телефон
          </label>
          <input className={styles.form_input} type="tel" id="phone" required />
        </p>
        <p className={styles.form_item}>
          <label htmlFor="company" className={styles.form_label}>
            Название компании
          </label>
          <input
            className={styles.form_input}
            type="text"
            id="company"
            required
          />
        </p>
      </form>
      <Button
        onClick={(e) => {
          dispatch(setIsActive(true));
        }}
      >
        Сохранить
      </Button>
      <Modal>Изменения сохранены!</Modal>
    </div>
  );
}
