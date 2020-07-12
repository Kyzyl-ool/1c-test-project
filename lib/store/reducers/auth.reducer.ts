import { AuthReducerStateType } from 'store/types/auth.type';

const initialState: AuthReducerStateType = {
  authorized: false
};

const Auth = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default Auth;
