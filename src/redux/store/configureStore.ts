import { configureStore as configStore } from '@reduxjs/toolkit'
import rootReducer from '../reducers';

export default function configureStore() {
    return configStore({ reducer: rootReducer });
}