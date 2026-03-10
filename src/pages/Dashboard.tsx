import React from 'react'
import SideBar from "../components/SideBar/SideBar";
import MyHeader from "../components/Header/MyHeader";
import Content from "../components/Content/Content";

const Dashboard = () => {
  return (
    <div style={{ display: "flex" }}>
        <SideBar />
        <div style={{width: '100%'}}>
          <MyHeader />
        <Content/>
        </div>
        
      </div>
  )
}

export default Dashboard
