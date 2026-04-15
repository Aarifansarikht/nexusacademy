import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import courseReducer from './features/courseSlice';
import uiReducer from './features/uiSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    courses: courseReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
