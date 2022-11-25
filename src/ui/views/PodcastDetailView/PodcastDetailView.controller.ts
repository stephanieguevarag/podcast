import { PodcastApplication } from "../../../aplication";
import { Podcast } from "../../../domain/models/Podcast";
import { PodcastDetail } from "../../../domain/models/PodcastDetail";
import {
  getStorageData,
  isFetchExpired,
  PodcastDetailStore,
  PodcastDetailStoreData,
  saveResponseInStorage,
} from "../../helpers";
import { PODCAST_STORAGE_KEY } from "../Home/Home.controller";

const PODCAST_DETAIL_STORAGE_KEY = "detail_storage";

const saveResponseDetailInStorage = async (
  storeData: PodcastDetailStoreData,
  id: string,
  podcastFullData: PodcastDetailStore
) => {
  const newData = {
    ...storeData,
    [id]: { ...podcastFullData },
  };
  saveResponseInStorage({ ...newData }, PODCAST_DETAIL_STORAGE_KEY);
};

const setPodcastData = (
  dataDetail: PodcastDetail,
  currentPodcast: Podcast
): PodcastDetailStore => {
  return {
    basicInfo: { ...currentPodcast },
    ...dataDetail,
    storeDate: new Date().toISOString(),
  };
};

const fetchPodcastDetail = async (
  podcastId: string,
  storeData: PodcastDetailStoreData,
  currentPodcast: Podcast
): Promise<PodcastDetailStore> => {
  try {
    const response = await PodcastApplication.getPodcastDetail(podcastId);
    const podcastFullData = setPodcastData(response, currentPodcast);
    saveResponseDetailInStorage(storeData, podcastId, podcastFullData);
    return podcastFullData;
  } catch (e) {
    return {} as PodcastDetailStore;
  }
};

const getPodcastDetail = async (
  podcastId: string,
  currentPodcast: Podcast
): Promise<PodcastDetailStore> => {
  const existBasicInfo = await getStorageData(PODCAST_STORAGE_KEY);
  if (!existBasicInfo) return {} as PodcastDetailStore;
  const podcastStorageData = await getStorageData(PODCAST_DETAIL_STORAGE_KEY);
  const isExpired = await isFetchExpired(
    podcastStorageData?.[podcastId]?.storeDate
  );
  if (!isExpired) return podcastStorageData[podcastId];
  return fetchPodcastDetail(podcastId, podcastStorageData, currentPodcast);
};

export { getPodcastDetail };
