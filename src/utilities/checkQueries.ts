export const checkApiKey = (
  queryApiKey: string | null,
  apiKey: string
): boolean => {
  if (queryApiKey === apiKey) {
    return true;
  }
  return false;
};

export const checkUnits = (units: string | null): boolean => {
  if (units === "metric") {
    return true;
  }
  return false;
};

export const checkLimit = (limit: string | null): boolean => {
  if (limit === "5") {
    return true;
  }
  return false;
};
