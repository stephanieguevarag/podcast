import { Podcast } from "../../../domain/models/Podcast";
import { PodcastApplication } from "../../../aplication";
import {
  getStorageData,
  isFetchExpired,
  saveResponseInStorage,
} from "../../helpers";

const PODCAST_STORAGE_KEY = "podcast_storage";

const fetchPodcast = async (): Promise<Podcast[]> => {
  try {
    const podcasts = await PodcastApplication.getPodcastList();
    saveResponseInStorage({ data: podcasts }, PODCAST_STORAGE_KEY);
    return podcasts;
  } catch (e) {
    saveResponseInStorage({ data: [] }, PODCAST_STORAGE_KEY);
    return [];
  }
};

const getPodcast = async (): Promise<Podcast[]> => {
  const podcastStorageData = await getStorageData(PODCAST_STORAGE_KEY);
  const isExpired = await isFetchExpired(podcastStorageData?.date);
  if (!isExpired) return podcastStorageData.data;
  return fetchPodcast();
};

export { getPodcast };
