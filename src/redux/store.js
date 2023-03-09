import { configureStore } from '@reduxjs/toolkit';


import { tmdbApi } from './services/tmdbAPI';

export const store = configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tmdbApi.middleware),
});
