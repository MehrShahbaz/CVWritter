import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import AuthSlice from './slices/authSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['auth'],
};
const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, AuthSlice),
});
const store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
