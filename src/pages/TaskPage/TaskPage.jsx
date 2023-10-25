import React from "react";
import styles from "./TaskPage.module.css";

export default function TaskPage() {
  return (
    <section className={styles.taskPage_section}>
      <div style={{ maxWidth: "700px" }}>
        <p className={styles.task_text}>
          Использованные технологии:
          <ul>
            <li>язык: JavaScript</li>
            <li>фреймворк: React (create-react-app)</li>
            <li>стейт менеджер: Redux Toolkit</li>
          </ul>
        </p>
      </div>
    </section>
  );
}
