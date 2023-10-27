import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../../app/store/usersSlice";
import Modal from "../../widgets/Modal/Modal";
import UserList from "../../entities/userList/UserList";

export default function MainPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="container">
      <h1>Активные</h1>
      <UserList />
      <Modal>hi</Modal>
    </div>
  );
}
