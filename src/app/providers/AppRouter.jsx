import { Route, Routes } from "react-router-dom";

import MainPage from "../../pages/MainPage/MainPage";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";
import ProfileForm from "../../widgets/ProfileForm/ProfileForm";
import WorkSpace from "../../pages/ProfilePage/subPages/workSpace/WorkSpace";
import Privacy from "../../pages/ProfilePage/subPages/privacy/Privacy";
import TaskPage from "../../pages/ProfilePage/subPages/TaskPage/TaskPage";

export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="profile/:id/" element={<ProfilePage />}>
      <Route path="form" element={<ProfileForm />} />
      <Route path="work" element={<WorkSpace />} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="safety" element={<WorkSpace />} />
      <Route path="task" element={<TaskPage />} />
    </Route>
  </Routes>
);
