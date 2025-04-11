import React from "react";
import planItLogo from "../assets/logo.svg";
import "./header.css";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { Button } from "antd";

const Header = () => {
  return (
    <div className="header">
      <div className="menu">
        <Button type="text">
          <MenuOutlined />
        </Button>
      </div>
      <img src={planItLogo} className="logo" alt="PlanIt logo" width={100} />

      <div className="user">
        <Button type="text">
          <UserOutlined />
        </Button>
      </div>
    </div>
  );
};

export default Header;
