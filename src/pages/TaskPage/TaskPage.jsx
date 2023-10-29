import React from "react";
import styles from "./TaskPage.module.css";

export default function TaskPage() {
  return (
    <section className={styles.task_page}>
      <p className={styles.task_text}>
        В данном тестовом задании для AT-WORK необходимо было реализовать
        двухстраничное приложение для отображения карточкек c информацией о
        юзерах
      </p>
      <p className={styles.task_text}>
        На главной странице должны быть шесть карточек, полученных с
        https://jsonplaceholder.typicode.com/users. Макет предоставлен
        работадателем. Каждая карточка должна содержать Username, City, Company
        Name и произвольную аватарку
      </p>
      <p className={styles.task_text}>
        С карточкой можно призводить действия, такие как: <br />
        Редактирование: переходит на страницу профиля с формой <br />
        Архивирование: Перенсит карточку в раздел "Архив"
        <br />
        Скрытие: удаляет карточку
      </p>

      <p className={styles.task_text}>
        Карточку из архива можно сделать активной
      </p>
      <p className={styles.task_text}>
        Во время загрузки отобразить сообщение об этом
      </p>
      <p className={styles.task_text}>
        Данные могут сбрасываться после перезагрузки
      </p>

      <p className={styles.task_text}>
        Страница редактирования должна содержать: Name, Username, Email, City,
        Phone, Company Name, произвольную аватарку
      </p>
      <p className={styles.task_text}>
        Во время агрузки отобразить сообщение об этом, данные могут сбрасываться
        после перезагрузки
      </p>
      <p className={styles.task_text}>
        На странице можно менять данные и сохранять изменения. Должна быть
        валидация полей
      </p>
      <p className={styles.task_text}>
        При нажатии на кнопку "Сохранить", при успешной валидации, должен
        появляться попап, который выключается по нажатию на крестик или
        автоматически через 4 секунды
      </p>
      <p className={styles.task_text}>Использованные технологии:</p>
      <ul>
        <li>
          язык: <b>JavaScript</b>
        </li>
        <li>
          фреймворк: <b>React (create-react-app)</b>
        </li>
        <li>
          стейт менеджер: <b>Redux Toolkit</b>
        </li>
      </ul>
      <br />
      <p className={styles.task_text}>
        Реультатом ожидается ссылка на репозиторий и деплой на любой сервис
      </p>
    </section>
  );
}
