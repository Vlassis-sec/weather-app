import { allIconsDescription } from "./WeatherIcons";

const getIconDescription = (iconString: string): string => {
  if (!(iconString in allIconsDescription)) {
    return allIconsDescription["01d"];
  }
  return allIconsDescription[iconString as keyof typeof allIconsDescription];
};

export default getIconDescription;
