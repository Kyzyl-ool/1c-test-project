import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { record } from 'store/reducers/record.reducer';
import { RecordStateType } from 'store/types/record.type';

let composeEnhancers = null;
const tmp = '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__';

if (window) {
  if (tmp in window) {
    composeEnhancers = window[tmp] || compose;
  } else {
    composeEnhancers = compose;
  }
} else {
  composeEnhancers = compose;
}

const enhancer = composeEnhancers(applyMiddleware(thunk));

export interface IRootReducer {
  record: RecordStateType;
}

export default function (initialState = {}) {
  const rootReducer = combineReducers({
    record
  });

  return createStore(rootReducer, initialState, enhancer);
}
