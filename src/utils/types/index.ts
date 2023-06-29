export type TCityType = {
  name: string,
  country: string,
  id: number
};

export type TCityCardType = {
  id: number,
  name: string,
  sys: {
    country: string,
  },
  dt: number,
  main: {
    feels_like: number,
    humidity: number,
    pressure: number,
    temp: number,
  },
  wind: {
    speed: number,
    deg: number,
  },
};

export type TForecastType = {
  city: {
    id: number,
    name: string,
  }
  country: string,
  list: [
    {
      dt: number,
      main: {
        feels_like: number,
        temp: number,
      },
    },
  ],
};

export type TForecastItemType = {
  dt: number,
  main: {
    feels_like: number,
    temp: number,
  },
};
