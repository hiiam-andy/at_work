import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneUser } from "../../app/store/oneUserSlice";
import { useParams } from "react-router-dom";
import Sidebar from "../../widgets/Sidebar/Sidebar";
import ProfileForm from "../../widgets/ProfileForm/ProfileForm";
import styles from "./OneUserPage.module.css";

export default function OneUserPage() {
  const { id } = useParams();
  const { isLoading } = useSelector((store) => store.oneUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOneUser(id));
  }, [dispatch, id]);
  return (
    <div className="container">
      {isLoading ? (
        <div>Загрузка...</div>
      ) : (
        <div style={{ display: "flex" }}>
          <Sidebar />
          <ProfileForm />
        </div>
      )}
    </div>
  );
}
