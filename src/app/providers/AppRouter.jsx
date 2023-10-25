import { Navigate, Route, Routes } from "react-router-dom";
import MainPage from "../../pages/MainPage/MainPage";
import TaskPage from "../../pages/TaskPage/TaskPage";
import OneUserPage from "../../pages/OneUserPage/OneUserPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/:id" element={<OneUserPage />} />
      <Route path='/task' element={<TaskPage/>}/>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
