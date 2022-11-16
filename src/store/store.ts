import { combineReducers, configureStore } from '@reduxjs/toolkit';
import articleReducer from "./reducer/articleSlice";
import testReducer from './reducer/testSlice';


export const rootReducer = combineReducers({
  articleReducer,
  testReducer
});

export const setupStore = ()  =>  {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']