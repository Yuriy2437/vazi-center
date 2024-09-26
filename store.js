import { configureStore } from '@reduxjs/toolkit';
import feedbackReducer from './reducers/feedbackReducer';

export const store = configureStore({
  reducer: {
    feedback: feedbackReducer,
  },
});
