import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setIsActiveModal } from "../../app/store/modalSlice";
import { editData } from "../../app/store/usersSlice";
import Modal from "../../shared/ui/Modal/Modal";
import Button from "../../shared/ui/Button";

import styles from "./ProfileForm.module.css";

export default function ProfileForm() {
  const { data } = useSelector((state) => state.oneUser);
  const allData = useSelector((state) => state.users.data);
  const dispatch = useDispatch();

  const [newData, setNewData] = useState({
    name: "",
    username: "",
    email: "",
    address: "",
    phone: "",
    company: "",
  });
  console.log(data);

  const editUser = (id, data, newData) => {
    editData(
      data.map((el, index) => {
        if (el.id === id) {
          for (let keys in newData) {
            if (el.hasOwnProperty(keys)) {
              el = { ...el, [keys]: newData[keys] };
            }
          }
          dispatch(editData({ el, index }));
        }
      })
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
              onChange={(e) => setNewData({ ...newData, name: e.target.value })}
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
              onChange={(e) =>
                setNewData({ ...newData, username: e.target.value })
              }
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
              onChange={(e) =>
                setNewData({ ...newData, email: e.target.value })
              }
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
              onChange={(e) =>
                setNewData({ ...newData, address: e.target.value })
              }
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
              onChange={(e) =>
                setNewData({ ...newData, phone: e.target.value })
              }
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
              onChange={(e) =>
                setNewData({ ...newData, company: e.target.value })
              }
            />
          </label>
        </p>
        <Button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            editUser(data.id, allData, newData);
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
