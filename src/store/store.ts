import { combineReducers, configureStore } from '@reduxjs/toolkit';
import articleReducer from "./reducer/articleSlice";


export const rootReducer = combineReducers({
  articleReducer
});

export const setupStore = ()  =>  {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']