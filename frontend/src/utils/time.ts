import axios from 'axios';

type TimeZoneInfo = {
  ianaTimeId: string;
  displayName: string;
  effectiveTimeZoneFull: string;
  effectiveTimeZoneShort: string;
  utcOffsetSeconds: number;
  utcOffset: string;
  isDaylightSavingTime: boolean;
  localTime: string;
};

export const getCurrentTime = async (lat: string, lon: string, apiKey: string) => {
  const respone = await axios.get(
    `https://api-bdc.net/data/timezone-by-location?latitude=${lat}&longitude=${lon}&key=${apiKey}`,
  );

  return respone.data as TimeZoneInfo;
};
