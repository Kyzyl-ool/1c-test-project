import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import Auth from 'store/reducers/auth.reducer';

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

export default function (initialState = {}) {
  const rootReducer = combineReducers({
    auth: Auth
  });

  return createStore(rootReducer, initialState, enhancer);
}
