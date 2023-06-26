import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { moduleApi } from './query';

const rootReducer = combineReducers({
  [moduleApi.reducerPath]: moduleApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moduleApi.middleware),
  devTools: true,
});

setupListeners(store.dispatch);

export type TState = ReturnType<typeof store.getState>;
