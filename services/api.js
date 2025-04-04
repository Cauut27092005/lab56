import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// API để lấy thông tin Pokemon
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

// API để đăng ký tài khoản (giả lập server)
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://67b2ee05bc0165def8cf3045.mockapi.io' }),  // Cập nhật URL phù hợp
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (userData) => ({
        url: 'user',
        method: 'POST',
        body: userData,
      }),
    }),
  }),
});

export const { useLazyGetPokemonByNameQuery } = pokemonApi;
export const { useSignupMutation } = authApi;
