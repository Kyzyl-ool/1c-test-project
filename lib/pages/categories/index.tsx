import React, { useState } from 'react';
import Typography from 'components/Typography';
import { Button, Empty, Form, Input, List, Space } from 'antd';
import useSWR, { mutate } from 'swr/esm/use-swr';
import { localDB } from '../../localStorageDB';
const { Text, Title } = Typography;
import { CirclePicker } from 'react-color';
import { RGBToHex } from '../../utils/RGBToHex';
import { ColoredCircle } from 'components/ColoredCircle';

interface ICategories {
  categoriesRows: Array<any>;
}

export const Categories: React.FC<ICategories> = (props) => {
  const { categoriesRows = [], ...rest } = props;
  const [addingNewColor, setAddingNewColor] = useState<boolean>(false);

  const onFinish = async (values) => {
    localDB.insert('categories', {
      name: values.name,
      color: RGBToHex(values.color.rgb.r, values.color.rgb.g, values.color.rgb.b)
    });
    localDB.commit();
    await mutate('categories');
  };

  return (
    <>
      <Title level={3}>Категории записей</Title>
      <List
        loading={!categoriesRows}
        dataSource={categoriesRows}
        locale={{
          emptyText: 'Добавьте новую категорию'
        }}
        renderItem={(item) => (
          <List.Item>
            <Space direction={'horizontal'}>
              <ColoredCircle hexColor={item.color} size={'medium'} />
              {item.name}
            </Space>
          </List.Item>
        )}
      >
        {categoriesRows.length ? null : <Empty description={'Добавьте новую категорию'} />}
        {addingNewColor ? (
          <Form onFinish={onFinish} className={'mf-form mf-form_bordered'}>
            <Form.Item
              label={'Название категории'}
              name={'name'}
              rules={[
                {
                  required: true,
                  message: 'Введите название категории'
                }
              ]}
            >
              <Input placeholder={'Введите название категории'} />
            </Form.Item>
            <Form.Item
              label={'Цвет'}
              name={'color'}
              rules={[
                {
                  required: true,
                  message: 'Выберите цвет'
                }
              ]}
            >
              <CirclePicker />
            </Form.Item>
            <Space direction={'horizontal'}>
              <Button type={'primary'} htmlType={'submit'}>
                Добавить новую категорию
              </Button>
              <Button onClick={() => setAddingNewColor(false)}>Отмена</Button>
            </Space>
          </Form>
        ) : (
          <Button type={'primary'} ghost onClick={() => setAddingNewColor(true)} style={{ marginTop: '16px' }}>
            + Добавить
          </Button>
        )}
      </List>
    </>
  );
};
