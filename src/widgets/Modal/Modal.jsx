import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Modal.module.css";
import { setIsActiveModal } from "../../app/store/modalSlice";

export default function Modal(props) {
  const dispatch = useDispatch();
  const { isActiveModal } = useSelector((store) => store.modal);

  // useEffect(() => {
  //   if (isActiveModal) {
  //     setTimeout(() => dispatch(setIsActiveModal(false), 4000));
  //   }
  // }, [dispatch, isActiveModal]);

  return (
    <div
      className={`${styles.modal} ${isActiveModal && styles.active}`}
      onClick={(e) => {
        dispatch(setIsActiveModal(false));
      }}
    >
      <div className={styles.modal_content}>{props.children}</div>
    </div>
  );
}
