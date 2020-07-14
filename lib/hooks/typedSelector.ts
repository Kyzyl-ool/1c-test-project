import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { IRootReducer } from 'store/configureStore';

export const useTypedSelector: TypedUseSelectorHook<IRootReducer> = useSelector;
