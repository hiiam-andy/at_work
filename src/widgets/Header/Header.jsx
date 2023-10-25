import React from 'react'
import styles from './Header.module.css'

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header_wrapper}>
        <div>
          LOGO
        </div>
        <div>
          <div>
            сердце
          </div>
          <div>
            колокольчик
          </div>
          <div>
            <span>ава </span>
            <span>ник</span> 
        </div>
      </div>
      </div>
    </div>
  )
}
