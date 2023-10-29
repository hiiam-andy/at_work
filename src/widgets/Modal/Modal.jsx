import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Modal.module.css";
import { setIsActiveModal } from "../../app/store/modalSlice";

export default function Modal(props) {
  const dispatch = useDispatch();
  const { isActive } = useSelector((store) => store.modal);

  useEffect(() => {
    if (!isActive) {
      setTimeout(() => dispatch(setIsActiveModal(false), 4000));
    }
  }, [dispatch, isActive]);

  return (
    <div
      className={`${styles.modal} ${isActive && styles.active}`}
      onClick={(e) => {
        dispatch(setIsActiveModal(false));
      }}
    >
      <div className={styles.modal_content}>{props.children}</div>
    </div>
  );
}
