import {
  type BaseQueryFn,
  type FetchArgs,
  type FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.openweathermap.org',
});

export const refreshTokenQuery: BaseQueryFn<
string | FetchArgs,
unknown,
FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  return result;
};

export const moduleApi = createApi({
  reducerPath: 'moduleApi',
  baseQuery: refreshTokenQuery,
  refetchOnFocus: true,
  tagTypes: [],
  endpoints: () => ({}),
});
