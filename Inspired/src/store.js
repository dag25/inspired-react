import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer.js';
const store = configureStore({
	reducer: rootReducer,
	devTools: import.meta.env.Dev,
});

export default store;
