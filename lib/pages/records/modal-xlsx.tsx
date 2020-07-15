import React from 'react';
import { Button, Form, message, Modal, Table, Upload } from 'antd';

interface IModalXLSX {
  visible: boolean;
  onOk: () => void;
  onCancel: () => void;
}

const columns = [
  {
    key: 'name',
    title: 'name',
    dataIndex: 'name'
  },
  {
    key: 'amount',
    title: 'amount',
    dataIndex: 'amount'
  },
  {
    key: 'categoryId',
    title: 'categoryId',
    dataIndex: 'categoryId'
  },
  {
    key: 'time',
    title: 'time',
    dataIndex: 'time'
  }
];

const dataSource = [
  {
    name: 'Половина зарплаты за июль',
    amount: '15000',
    categoryId: 'Зарплата',
    time: '15.07.2020, 20:15:50'
  }
];

const uploadProps = {
  accept: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  name: 'file',
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }
};

export const ModalXLSX: React.FC<IModalXLSX> = (props) => {
  const { visible, onCancel, onOk, ...rest } = props;
  return (
    <Modal
      title={'Импорт записей из XLSX'}
      visible={visible}
      onCancel={onCancel}
      onOk={onOk}
      okText={'Загрузить'}
      cancelText={'Отмена'}
    >
      Перед импортированием убедитесь, что XLSX-файл имеет следующий формат:
      <br />
      <Table columns={columns} dataSource={dataSource} pagination={false} />
      <br />
      <Form>
        <Form.Item label={'Файл'} name={'file'}>
          <Upload {...uploadProps}>
            <Button>Выбрать XLSX-файл</Button>
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  );
};
