import React from 'react';
import { pages } from 'pages/index';
import { Menu } from 'antd';
import { NavLink, useLocation } from 'react-router-dom';

export const Sider: React.FC = (props) => {
  const location = useLocation();

  return (
    <Menu theme={'dark'} defaultSelectedKeys={[location.pathname]}>
      {pages.map((value) => (
        <Menu.Item key={value.path}>
          <NavLink to={value.path}>{value.name}</NavLink>
        </Menu.Item>
      ))}
    </Menu>
  );
};
