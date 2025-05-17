export interface Weather {
  main: {
    humidity: number;
    temp: number;
  };
  name: string;
  weather: Array<{
    icon: string;
  }>;
  wind: {
    speed: number;
  };
}
