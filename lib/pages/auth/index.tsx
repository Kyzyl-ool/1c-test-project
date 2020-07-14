import React from 'react';
import { Form, Input, notification, Button, Col } from 'antd';
import { sha256 } from 'js-sha256';
import * as H from 'history';
import { useHistory } from 'react-router-dom';
import { localDB } from '../../localStorageDB';
import { validate } from '../../auth';
import './index.scss';

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
    <>
      <div className={'mf-auth-page-background'} />
      <Form onFinish={onFinish} className={'mf-form mf-form_bordered mf-auth-page-auth-window'}>
        <Form.Item
          label={'Пароль'}
          name={'password'}
          rules={[
            {
              required: true,
              message: 'Введите пароль'
            }
          ]}
        >
          <Input type={'password'} placeholder={'Введите пароль'} />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 24, offset: 8 }}>
          <Col span={12}>
            <Button type={'primary'} htmlType={'submit'} block>
              Войти
            </Button>
          </Col>
        </Form.Item>
      </Form>
    </>
  );
};
