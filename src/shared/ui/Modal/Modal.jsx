import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Modal.module.css";
import { setIsActiveModal } from "../../../app/store/modalSlice";

export default function Modal(props) {
  const dispatch = useDispatch();
  const { isActiveModal } = useSelector((store) => store.modal);

  const closeModal = () => {
    dispatch(setIsActiveModal(false));
  };

  useEffect(() => {
    if (isActiveModal) {
      setTimeout(() => closeModal(), 4000);
    }
    return clearTimeout;
  }, [dispatch, isActiveModal]);

  return (
    <div className={`${styles.modal} ${isActiveModal && styles.active}`} onClick={closeModal}>
      <div className={styles.modal_content} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modal_media}>
          <svg
            className={styles.modal_close}
            onClick={closeModal}
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.06588 1.99469C9.35877 1.70179 9.35877 1.22692 9.06588 0.934025C8.77298 0.641132 8.29811 0.641132 8.00522 0.934025L5.00002 3.93922L1.99482 0.934026C1.70192 0.641133 1.22705 0.641132 0.934157 0.934026C0.641264 1.22692 0.641264 1.70179 0.934157 1.99469L3.93936 4.99989L0.934147 8.00509C0.641254 8.29799 0.641254 8.77286 0.934147 9.06575C1.22704 9.35865 1.70191 9.35865 1.99481 9.06575L5.00002 6.06054L8.00522 9.06575C8.29812 9.35865 8.77299 9.35865 9.06588 9.06575C9.35878 8.77286 9.35878 8.29799 9.06588 8.00509L6.06068 4.99989L9.06588 1.99469Z"
              fill="#161616"
            />
          </svg>
          <svg
            className={styles.modal_check}
            width="85"
            height="84"
            viewBox="0 0 85 84"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.1087 13.1907C36.9151 11.983 48.085 11.983 58.8914 13.1907C62.9487 13.6442 66.5103 15.8383 68.7633 19.0246L40.7501 47.0378L32.1063 38.394C31.0812 37.3688 29.4191 37.3688 28.394 38.394C27.3688 39.4191 27.3688 41.0811 28.394 42.1063L38.894 52.6063C39.9191 53.6314 41.5812 53.6314 42.6063 52.6063L71.0103 24.2023C71.089 24.5857 71.1517 24.9751 71.1979 25.3698C72.4902 36.419 72.4902 47.5812 71.1979 58.6304C70.4459 65.0598 65.2838 70.095 58.8914 70.8095C48.085 72.0173 36.9151 72.0173 26.1087 70.8095C19.7164 70.095 14.5542 65.0598 13.8022 58.6304C12.5099 47.5812 12.5099 36.419 13.8022 25.3698C14.5542 18.9404 19.7164 13.9052 26.1087 13.1907Z"
              fill="#C6F4C6"
            />
          </svg>
        </div>
        <div className={styles.modal_props}>{props.children}</div>
      </div>
    </div>
  );
}
