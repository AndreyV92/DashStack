import SideBar from "../components/SideBar/SideBar";
import MyHeader from "../components/Header/MyHeader";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <div style={{ width: "100%" }}>
        <MyHeader />

        <Outlet/>
      </div>
    </div>
  );
};

export default Dashboard;
