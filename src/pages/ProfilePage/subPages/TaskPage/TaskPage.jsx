import React from "react";
import styles from "./TaskPage.module.css";

export default function TaskPage() {
  return (
    <section className="profile_container">
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
        <br />
        Карточку из архива можно сделать активной,
        <br /> Во время загрузки отобразить сообщение об этом, <br />
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
      <p className={styles.task_text}>
        Использованные технологии:
        <ul>
          <li>язык: JavaScript</li>
          <li>фреймворк: React (create-react-app)</li>
          <li>стейт менеджер: Redux Toolkit</li>
        </ul>
        Реультатом ожидается ссылка на репозиторий и деплой на любой сервис
      </p>
    </section>
  );
}
