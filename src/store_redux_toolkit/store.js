import { configureStore } from '@reduxjs/toolkit'
import user_slice from './reducers/user_slice';
 
export const store = configureStore({
  reducer: {
 user:user_slice,
  }, 
})
