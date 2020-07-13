import React, { useEffect } from 'react';
import { localDB } from '../../localStorageDB';
import { validateHash } from '../../auth';
import * as H from 'history';
import { useHistory, Route } from 'react-router-dom';
import { notification, Layout, Menu } from 'antd';
import { Content } from 'pages/main/Content';
import { Sider } from './Sider';

export const MainPage: React.FC = (props) => {
  const history: H.History = useHistory();

  useEffect(() => {
    const tmp = localDB.queryAll('auth', {});
    if (!validateHash(tmp[0].password)) {
      history.push('/auth');
      notification.error({
        message: 'Неавторизован',
        description: 'Необходимо пройти авторизацию'
      });
    }
  }, []);

  return (
    <Layout>
      <Layout.Header style={{ color: '#fff' }}>My Finances</Layout.Header>
      <Layout>
        <Layout.Sider>
          <Sider />
        </Layout.Sider>
        <Layout.Content>
          <Content />
          <Layout.Footer>Kezhik Kyzyl-ool</Layout.Footer>
        </Layout.Content>
      </Layout>
    </Layout>
  );
};
