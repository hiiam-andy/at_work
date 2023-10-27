import React, { useEffect, useState } from "react";
import styles from "./Modal.module.css";

export default function Modal(props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible) {
      setTimeout(() => setVisible(false), 4000);
    }
  }, [visible]);

  return (
    <div
      className={`${styles.modal} ${visible && styles.active}`}
      onClick={() => setVisible(false)}
    >
      <div className={styles.modal_content}>{props.children}</div>
    </div>
  );
}
