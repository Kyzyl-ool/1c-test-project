import 'localstoragedb';
import * as lDB from 'localstoragedb/localstoragedb';

export const localDB: localStorageDB = new lDB.default('localDB');

type Table = {
  name: string;
  fields: string[];
};

const tables: Array<Table> = [
  {
    name: 'auth',
    fields: ['password']
  },
  {
    name: 'records',
    fields: ['name', 'amount', 'categoryId', 'type']
  },
  {
    name: 'categories',
    fields: ['name', 'color']
  }
];

export const initDB = (): void => {
  if (localDB.isNew()) {
    tables.forEach((value) => localDB.createTable(value.name, value.fields));
    localDB.commit();
  } else {
    if (
      tables.every(
        (value) =>
          localDB.tableExists(value.name) &&
          localDB.tableFields(value.name).every((value1) => localDB.columnExists(value.name, value1))
      )
    ) {
      console.log('localDB is OK');
    } else {
      throw Error('localDB is inconsistent');
    }
  }
};