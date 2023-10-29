import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Modal.module.css";
import { setIsActive } from "../../app/store/modalSlice";

export default function Modal(props) {
  const dispatch = useDispatch();
  const { isActive } = useSelector((store) => store.modal);

  useEffect(() => {
    if (!isActive) {
      setTimeout(() => dispatch(setIsActive(false), 4000));
    }
  }, [dispatch, isActive]);

  return (
    <div
      className={`${styles.modal} ${isActive && styles.active}`}
      onClick={(e) => {
        dispatch(setIsActive(false));
      }}
    >
      <div className={styles.modal_content}>{props.children}</div>
    </div>
  );
}
