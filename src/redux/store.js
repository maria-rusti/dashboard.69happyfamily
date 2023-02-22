import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import storage from 'redux-persist/lib/storage';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import reducer from './reducers/reducer';
// ==============================|| REDUX - MAIN STORE ||============================== //
const persistConfig = {
  key: 'root',
  storage,
  version: 1
  // whitelist: ['userState', 'utilState'],
};
const persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});
setupListeners(store.dispatch);

export default store;
