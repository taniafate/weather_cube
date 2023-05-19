export type cityCardType = {
  id: string
  name: string
  sys: {
    country: string
  }
  dt: number
  main: {
    feels_like: number
    humidity: number
    pressure: number
    temp: number
  },
  wind: {
    speed: number
    deg: number
  }
};

export type CityType = {
  name: string
  country: string
  lat: number
  lon: number
  id: number
};
