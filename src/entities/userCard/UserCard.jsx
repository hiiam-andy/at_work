import React, { useState } from "react";
import styles from "./UserCard.module.css";
import { NavLink } from "react-router-dom";
import Dropdown from "../../widgets/Dropdown/Dropdown";

export default function UserCard({ id, name, city, companyName, image }) {
  return (
    <NavLink to={`/${id}`}>
      <div className={styles.card}>
        <img className={styles.card_image} src={image} alt="avatar" />
        <div className={styles.card_content}>
          <div className={styles.name_dropdown_section}>
            <div>{name}</div>
            <Dropdown id={id} />
          </div>
          <div>{city}</div>
          <div>{companyName}</div>
        </div>
      </div>
    </NavLink>
  );
}
