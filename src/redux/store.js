import { configureStore } from '@reduxjs/toolkit';
import {  persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';
import { fetchContacts } from './contactsSlice';  // Додано імпорт

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['register']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});



// Завантаження контактів при завантаженні сторінки
store.dispatch(fetchContacts());
