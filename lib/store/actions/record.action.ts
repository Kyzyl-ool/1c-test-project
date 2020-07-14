import { RECORD_ADDING_NEW } from 'store/constants/record.constants';

export type RecordAddingNewAction = {
  type: typeof RECORD_ADDING_NEW;
  payload: {
    state: boolean;
  };
};

export type RecordAction = RecordAddingNewAction;

export const addingNewAction = (state = true): RecordAddingNewAction => {
  return {
    type: RECORD_ADDING_NEW,
    payload: {
      state
    }
  };
};
