import { allIcons } from "./WeatherIcons";

const getIcon = (iconString: string): string => {
  if (!(iconString in allIcons)) {
    return allIcons["01d"];
  }
  return allIcons[iconString as keyof typeof allIcons];
};

export default getIcon;
