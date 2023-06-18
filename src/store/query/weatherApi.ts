import { moduleApi } from '.';
import { TCityCardType, TCityType, TForecastType } from '../../types';

export const weatherApi = moduleApi.injectEndpoints({
  endpoints: (build) => ({
    getCity: build.query<TCityType[], string>({
      query: (city: string) => ({
        url: `/geo/1.0/direct?q=${city.trim()}&limit=5&lang=en&appid=${process.env.REACT_APP_OWAPI_KEY}`,
        method: 'GET',
      }),
    }),
    getCityWeather: build.query<TCityCardType, string>({
      query: (city: string) => ({
        url: `/data/2.5/weather?q=${city}&&units=metric&appid=${process.env.REACT_APP_OWAPI_KEY}`,
        method: 'GET',
      }),
    }),
    getForecast: build.query<TForecastType, string>({
      query: (location: string) => ({
        url: `/data/2.5/forecast?q=${location}&&units=metric&appid=${process.env.REACT_APP_OWAPI_KEY}`,
        method: 'GET',
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetCityQuery, useLazyGetCityWeatherQuery, useLazyGetForecastQuery } = weatherApi;
