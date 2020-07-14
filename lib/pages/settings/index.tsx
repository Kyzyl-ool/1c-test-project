import React, { useState } from 'react';
import Typography from 'components/Typography';
import { Button, Modal } from 'antd';
import { initDB, localDB } from '../../localStorageDB';
import * as H from 'history';
import { useHistory } from 'react-router-dom';

const { Text, Title } = Typography;

export const SettingsPage: React.FC = (props) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const history: H.History = useHistory();

  return (
    <>
      <Title level={3}>Настройки</Title>
      <Button danger onClick={() => setShowModal(true)}>
        Очистить базу данных
      </Button>
      <Modal
        onCancel={() => setShowModal(false)}
        onOk={() => {
          localDB.drop();
          setShowModal(false);
          history.push('/auth');
        }}
        visible={showModal}
        title={'Подтверждение'}
      >
        <Text>Вы уверены, что хотите очистить базу данных?</Text>
      </Modal>
    </>
  );
};
