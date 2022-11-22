import { Storage } from "../../infrastructure/api/storage/storage";

export const getStorageData = async (key: string) => {
  const storageData = await Storage.get(key);
  return storageData ? JSON.parse(storageData) : null;
};
