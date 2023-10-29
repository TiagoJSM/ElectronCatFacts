import { configureStore as configStore } from '@reduxjs/toolkit'
import rootReducer from '../reducers';

const store = configStore({ reducer: rootReducer });

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store;