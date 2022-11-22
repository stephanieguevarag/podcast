import { differenceInHours, subHours } from "date-fns";

export const isFetchExpired = async (storageDate: string): Promise<boolean> => {
  if (!storageDate) return true;
  const oneDayDiff = subHours(new Date(), 24);
  const diffInHours = differenceInHours(new Date(storageDate), oneDayDiff);
  return diffInHours > 24;
};
