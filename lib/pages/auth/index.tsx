import React from 'react';
import { Form, Input, notification } from 'antd';
import { sha256 } from 'js-sha256';
import * as H from 'history';
import { useHistory } from 'react-router-dom';
import { localDB } from '../../localStorageDB';
import { validate } from '../../auth';

type FormFieldsType = Record<'password', string>;

export const AuthPage: React.FC = (props) => {
  const history: H.History = useHistory();

  const onFinish = (values: FormFieldsType) => {
    if (validate(values.password)) {
      localDB.insert('auth', {
        password: sha256(values.password)
      });
      localDB.commit();
      history.push('/');
      notification.success({
        message: 'Успешная авторизация'
      });
    }
  };

  return (
    <Form onFinish={onFinish} className={'mf-form mf-form_bordered'}>
      <Form.Item label={'Пароль'} name={'password'}>
        <Input type={'password'} placeholder={'Введите пароль'} />
      </Form.Item>
    </Form>
  );
};
