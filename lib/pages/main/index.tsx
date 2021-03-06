import React, { useEffect } from 'react';
import { localDB } from '../../localStorageDB';
import { validateHash } from '../../auth';
import * as H from 'history';
import { useHistory } from 'react-router-dom';
import { notification, Layout } from 'antd';
import { Content } from 'pages/main/content';
import { Sider } from 'pages/main/sider';
import './index.scss';
import Typography from 'components/Typography';

const { Text, Title } = Typography;

export const MainPage: React.FC = (props) => {
  const history: H.History = useHistory();

  useEffect(() => {
    const handleUnauthorized = () => {
      history.push('/auth');
      notification.error({
        message: 'Не авторизован',
        description: 'Необходимо пройти авторизацию'
      });
    };

    if (localDB.tableExists('auth')) {
      const authTableRows = localDB.queryAll('auth', {});
      if (!authTableRows.length || !validateHash(authTableRows[0].password)) {
        handleUnauthorized();
      }
    } else {
      handleUnauthorized();
    }
  }, []);

  return (
    <Layout>
      <Layout.Header style={{ color: '#fff' }}>My Finances</Layout.Header>
      <Layout>
        <Layout.Sider>
          <Sider />
        </Layout.Sider>
        <Layout.Content className="mf-main-content">
          <Content />
          <Layout.Footer>
            <Text type={'secondary'}>Kezhik Kyzyl-ool, 2020</Text>
          </Layout.Footer>
        </Layout.Content>
      </Layout>
    </Layout>
  );
};
