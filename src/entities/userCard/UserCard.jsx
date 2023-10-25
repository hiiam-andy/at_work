import React from 'react'
import styles from './UserCard.module.css'
import { NavLink } from 'react-router-dom'

export default function UserCard({ id, name, city, companyName, image}) {
  return (
    <NavLink to={`/${id}`}>

    <div className={styles.card}>  
      <img className={styles.card_image} src={image} alt="avatar"/>
      <div className={styles.card_content}>
        <div>
          <div>{name}</div>
          <button>...</button>
        </div>
        <div>{city}</div>
        <div>{companyName}</div>
      </div>
    </div>
    </NavLink>
  )
}
