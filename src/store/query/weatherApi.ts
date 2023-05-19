import { API_KEY } from '../../utils/constants';

import { moduleApi } from '.';
import { cityCardType, CityType } from '../../types';

export const weatherApi = moduleApi.injectEndpoints({
  endpoints: (build) => ({
    getCity: build.query<CityType[], string>({
      query: (city: string) => ({
        url: `/geo/1.0/direct?q=${city.trim()}&limit=5&lang=en&appid=${API_KEY}`,
        method: 'GET',
      }),
    }),
    getForecast: build.query<cityCardType[], string>({
      query: (name: string) => ({
        url: `/data/2.5/weather?q=${name}&&units=metric&appid=${API_KEY}`,
        method: 'GET',
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetCityQuery, useLazyGetForecastQuery } = weatherApi;
