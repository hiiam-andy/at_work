import React from "react";
import styles from "./ProfileForm.module.css";
import Button from "../../shared/ui/Button";
import { useParams } from "react-router-dom";

export default function ProfileForm() {
  const id = useParams();
  console.log(id);
  return (
    <div className={styles.form_wrapper}>
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
      <Button onClick={(e) => e.preventDefault()}>Сохранить</Button>
    </div>
  );
}
