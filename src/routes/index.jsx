import { Route, Routes } from "react-router-dom";
import Store from "../pages/Store";
import MainPage from "../pages/MainPage";

const Router = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/creditos" element={<Store />} />
      </Routes>
    </>
  );
};

export default Router;
