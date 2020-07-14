import { RecordStateType } from 'store/types/record.type';
import { RecordAction } from 'store/actions/record.action';

const initialState: RecordStateType = {
  newRecord: {
    name: '',
    amount: '',
    categoryId: '',
    type: ''
  },
  isCreatingNew: false
};

export const record = (state = initialState, action: RecordAction): RecordStateType => {
  switch (action.type) {
    case 'RECORD_ADDING_NEW': {
      return {
        ...state,
        isCreatingNew: action.payload.state
      };
    }
    default: {
      return state;
    }
  }
};
