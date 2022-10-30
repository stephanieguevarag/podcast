import { Storage } from "../../../infrastructure/api/storage/storage";
import { subHours, differenceInHours } from "date-fns";
import { Podcast } from "../../../domain/models/Podcast";
import { PodcastApplication } from "../../../aplication";

const PODCAST_STORAGE_KEY = "podcast_storage";

interface StorageData {
  podcastList: Podcast[];
  date: string;
}

const savePodcastRequest = (podcastData: Podcast[]) =>
  Storage.set(
    PODCAST_STORAGE_KEY,
    JSON.stringify({
      podcastList: podcastData,
      date: new Date().toISOString(),
    })
  );

const isFetchExpired = async (storageData: StorageData): Promise<boolean> => {
  if (!storageData) return true;
  const oneDayDiff = subHours(new Date(), 24);
  const diffInHours = differenceInHours(new Date(storageData.date), oneDayDiff);
  return diffInHours > 24;
};

const getPodcastStorageData = async () => {
  const lastFetch = await Storage.get(PODCAST_STORAGE_KEY);
  return lastFetch ? JSON.parse(lastFetch) : null;
};

const fetchPodcast = async (): Promise<Podcast[]> => {
  try {
    const podcasts = await PodcastApplication.getPodcastList();
    savePodcastRequest(podcasts);
    return podcasts;
  } catch (e) {
    savePodcastRequest([]);
    return [];
  }
};

const getPodcast = async (): Promise<Podcast[]> => {
  const podcastStorageData = await getPodcastStorageData();
  const isExpired = await isFetchExpired(podcastStorageData);
  if (!isExpired) return podcastStorageData.podcastList;
  return fetchPodcast();
};

export { getPodcast };
