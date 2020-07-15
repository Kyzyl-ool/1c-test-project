import React, { useState } from 'react';
import { Button, Form, Input, message, Modal, Table, Upload } from 'antd';
import XLSX from 'xlsx';
import { mutate } from 'swr';
import { localDB } from '../../localStorageDB';
import { randomHexColor } from '../../utils/color';

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
    key: 'category',
    title: 'category',
    dataIndex: 'category'
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
    time: '15.07.2020, 20:15:50',
    key: '1'
  }
];

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
      okButtonProps={{
        htmlType: 'submit',
        form: 'xlsx-file'
      }}
    >
      Перед импортированием убедитесь, что XLSX-файл имеет следующий формат:
      <br />
      <Table columns={columns} dataSource={dataSource} pagination={false} />
      <br />
      <Form name={'xlsx-file'}>
        <Form.Item
          label={'Файл'}
          name={'file'}
          rules={[
            {
              required: true,
              message: 'Загрузите файл'
            }
          ]}
        >
          <Input
            type={'file'}
            accept={'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'}
            onChange={(e) => {
              const file = e.target.files[0];
              const reader = new FileReader();
              const rABS = !!reader.readAsBinaryString;
              reader.onload = (e) => {
                /* Parse data */
                const bstr = e.target.result;
                const wb = XLSX.read(bstr, { type: rABS ? 'binary' : 'array', cellDates: true, dateNF: 'dd.mm.yyyy' });
                /* Get first worksheet */
                const wsname = wb.SheetNames[0];
                const ws = wb.Sheets[wsname];
                /* Convert array of arrays */
                const data = XLSX.utils.sheet_to_json(ws, { header: 1, raw: true, dateNF: 'dd.mm.yyyy' });

                data
                  .slice(1)
                  .map((value) => {
                    const category = localDB.query('categories', {
                      name: value[2]
                    })[0];
                    if (category) {
                      return {
                        name: value[0],
                        amount: value[1],
                        categoryId: category.ID,
                        time: new Date(value[3])
                      };
                    } else {
                      const newId = localDB.insert('categories', {
                        name: value[2],
                        color: randomHexColor()
                      });

                      return {
                        name: value[0],
                        amount: value[1],
                        categoryId: newId,
                        time: new Date(value[3])
                      };
                    }
                  })
                  .forEach((value) => localDB.insert('records', value));
                localDB.commit();
                mutate('records');
                mutate('categories');
                message.success(`Файл импортирован`);
                onOk();
              };
              if (rABS) reader.readAsBinaryString(file);
              else reader.readAsArrayBuffer(file);
            }}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};
