import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './user/userSlice.js';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  user: userReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};

const persistedReducser = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducser,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serialzableCheck: false }),
});

export const persistor = persistStore(store);
