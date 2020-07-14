import React from 'react';
import useSWR, { mutate } from 'swr/esm/use-swr';
import { localDB } from '../../localStorageDB';
import { List, Button, Form, Input, Select, Radio, Space, Table, Tag } from 'antd';
import Typography from 'components/Typography';
import { useDispatch } from 'react-redux';
import { addingNewAction } from 'store/actions/record.action';
import { useTypedSelector } from 'hooks/typedSelector';
import { Categories } from 'pages/categories';
import { ColoredCircle } from 'components/ColoredCircle';

const { Text, Title } = Typography;

const deleteRecord = async (id) => {
  localDB.deleteRows('records', {
    ID: id
  });
  localDB.commit();
  await mutate('records');
};

const getCategoryById = (id: string) => {
  return localDB.query('categories', {
    ID: id
  })[0];
};

const columns = [
  {
    key: 'name',
    title: 'Название',
    dataIndex: 'name',
    // eslint-disable-next-line react/display-name
    render: (text, record) => (
      <Space direction={'vertical'} size={0}>
        <Text size={'base'}>{text}</Text>
        <Text size={'sm'} type={'secondary'}>{`${new Date(record.time).toLocaleDateString()}`}</Text>
      </Space>
    )
  },
  {
    key: 'category',
    title: 'Категория',
    dataIndex: 'categoryId',
    // eslint-disable-next-line react/display-name
    render: (text) => (
      <>
        <Space direction={'horizontal'}>
          <ColoredCircle hexColor={getCategoryById(text).color} size={'medium'} />
          <Text>{getCategoryById(text).name}</Text>
        </Space>
      </>
    )
  },
  {
    key: 'amount',
    title: 'Сумма (руб.)',
    dataIndex: 'amount',
    render: (text) => Math.abs(Number(text))
  },
  {
    key: 'type',
    title: 'Тип',
    // eslint-disable-next-line react/display-name
    render: (_, record) =>
      Number(record.amount) < 0 ? <Tag color={'error'}>Затраты</Tag> : <Tag color={'success'}>Начисления</Tag>
  },
  {
    key: 'actions',
    title: 'Действия',
    // eslint-disable-next-line react/display-name
    render: (_, record) => {
      return (
        <Button type={'text'} danger onClick={() => deleteRecord(record.ID)}>
          Удалить
        </Button>
      );
    }
  }
];

export const RecordsPage: React.FC = (props) => {
  const { data: recordsRows } = useSWR('records', (key: string) => localDB.queryAll(key, {}));
  const { data: categoriesRows } = useSWR('categories', (key: string) => localDB.queryAll(key, {}), {});
  const { isCreatingNew } = useTypedSelector((state) => state.record);
  const dispatch = useDispatch();

  const onAddRecord = async (values) => {
    localDB.insert('records', {
      name: values.name,
      amount: values.amount * values.type,
      time: new Date().toISOString(),
      categoryId: values.category
    });
    localDB.commit();

    await mutate('records');
  };

  return (
    <>
      <Title level={3}>Ваши записи</Title>
      <Table
        dataSource={recordsRows && recordsRows.map((value) => Object.assign(value, { key: value.ID }))}
        columns={columns}
        locale={{
          emptyText: 'Нет ни одной записи в хранилище'
        }}
      />
      <Space direction={'vertical'} size={'large'}>
        {isCreatingNew ? (
          <Form className={'mf-form mf-form_bordered'} onFinish={onAddRecord}>
            <Form.Item
              label={'Вид записи'}
              name={'type'}
              rules={[
                {
                  required: true,
                  message: 'Выберите вид записи'
                }
              ]}
            >
              <Radio.Group>
                <Radio value={1}>Доход</Radio>
                <Radio value={-1}>Расход</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              label={'Название записи'}
              name={'name'}
              rules={[
                {
                  required: true,
                  message: 'Введите название записи'
                }
              ]}
            >
              <Input placeholder={'Введите название записи'} />
            </Form.Item>
            <Form.Item
              label={'Сумма'}
              name={'amount'}
              rules={[
                {
                  required: true,
                  message: 'Введите сумму'
                }
              ]}
            >
              <Input prefix={'₽'} placeholder={'Введите сумму'} type={'number'} suffix={'RUB'} />
            </Form.Item>
            <Form.Item
              label={'Категория'}
              name={'category'}
              rules={[
                {
                  required: true,
                  message: 'Выберите категорию записи'
                }
              ]}
            >
              <Select>
                {categoriesRows.map((value) => (
                  <Select.Option label={value.name} value={value.ID} key={value.ID}>
                    <Space direction={'horizontal'}>
                      <ColoredCircle hexColor={value.color} size={'small'} />
                      {value.name}
                    </Space>
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item>
              <Space direction={'horizontal'}>
                <Button type={'primary'} htmlType={'submit'}>
                  Добавить запись
                </Button>
                <Button onClick={() => dispatch(addingNewAction(false))}>Отменить</Button>
              </Space>
            </Form.Item>
          </Form>
        ) : (
          <Button ghost type={'primary'} onClick={() => dispatch(addingNewAction())}>
            + Добавить новую запись
          </Button>
        )}
        <Categories categoriesRows={categoriesRows} />
      </Space>
    </>
  );
};
