import { configureStore } from '@reduxjs/toolkit';
import { pokemonApi, authApi } from './services/api';

const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(pokemonApi.middleware)
      .concat(authApi.middleware),
});

export default store;
