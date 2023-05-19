import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { moduleApi } from './query';

const rootReducer = combineReducers({
  [moduleApi.reducerPath]: moduleApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moduleApi.middleware),
  devTools: true,
});

export type TState = ReturnType<typeof store.getState>;
