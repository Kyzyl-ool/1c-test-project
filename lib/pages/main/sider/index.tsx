import React from 'react';
import { pages } from 'pages/index';
import { Button, Menu } from 'antd';
import { NavLink, useLocation } from 'react-router-dom';
import { localDB } from '../../../localStorageDB';
import * as H from 'history';
import { useHistory } from 'react-router-dom';

export const Sider: React.FC = (props) => {
  const location = useLocation();
  const history: H.History = useHistory();

  const onExit = () => {
    localDB.deleteRows('auth', {});
    localDB.commit();
    history.push('/auth');
  };

  return (
    <Menu theme={'dark'} defaultSelectedKeys={[location.pathname]}>
      {pages.map((value) => (
        <Menu.Item key={value.path}>
          <NavLink to={value.path}>{value.name}</NavLink>
        </Menu.Item>
      ))}
      <Menu.Item onClick={onExit}>Выйти</Menu.Item>
    </Menu>
  );
};
