import React, { useState } from "react";
import styles from "./UserCard.module.css";

import Dropdown from "../../widgets/Dropdown/Dropdown";

export default function UserCard({
  id,
  name,
  city,
  companyName,
  image,
  isArchived,
}) {
  const [isActive, setIsActive] = useState(true);

  const showDropdown = () => {
    setIsActive((toggle) => !toggle);
  };

  return (
    <div className={`${styles.card} ${isArchived && styles.archived}`}>
      <img className={styles.card_image} src={image} alt="avatar" />
      <div className={styles.card_content}>
        <div>
          <div className={styles.name_dropdown_section}>
            <div className={styles.dropdown_btn} onClick={() => showDropdown()}>
              <svg
                width="4"
                height="16"
                viewBox="0 0 4 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12C0.9 12 0 12.9 0 14ZM0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2ZM0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6C0.9 6 0 6.9 0 8Z"
                  fill="#161616"
                />
              </svg>
            </div>
            <div className={`${styles.content_text} ${styles.name}`}>
              {name}
            </div>
            <Dropdown
              id={id}
              isArchived={isArchived}
              isActive={isActive}
              showDropdown={showDropdown}
            />
          </div>
          <div className={`${styles.content_text}  ${styles.company}`}>
            {companyName}
          </div>
        </div>
        <div className={`${styles.content_text}  ${styles.city}`}>{city}</div>
      </div>
    </div>
  );
}
