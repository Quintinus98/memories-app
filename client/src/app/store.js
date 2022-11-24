import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/Posts/postsSlice';
import usersReducer from '../features/Users/usersSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer
  },
});
