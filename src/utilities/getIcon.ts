import { allIcons } from "./WeatherIcons";

// export type icon =
//   | "01d"
//   | "01n"
//   | "02d"
//   | "02n"
//   | "03d"
//   | "03n"
//   | "04d"
//   | "04n"
//   | "09d"
//   | "09n"
//   | "10d"
//   | "10n"
//   | "13d"
//   | "13n";

const getIcon = (iconString: string | undefined): string => {
  if (!iconString || !(iconString in allIcons)) {
    return allIcons["01d"];
  }
  return allIcons[iconString as keyof typeof allIcons];
};

export default getIcon;
