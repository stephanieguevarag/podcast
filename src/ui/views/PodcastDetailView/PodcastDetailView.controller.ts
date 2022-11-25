import { PodcastApplication } from "../../../aplication";
import { Podcast } from "../../../domain/models/Podcast";
import {
  PodcastDetail,
  PodcastDetailData,
} from "../../../domain/models/PodcastDetail";
import {
  getStorageData,
  isFetchExpired,
  PodcastDetailStore,
  PodcastDetailStoreData,
  saveResponseInStorage,
} from "../../helpers";
import { format } from "date-fns";

const PODCAST_DETAIL_STORAGE_KEY = "detail_storage";

export interface PodcastDetailTable {
  title: string;
  duration: string;
  releaseDate: string;
}
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
  const podcastStorageData = await getStorageData(PODCAST_DETAIL_STORAGE_KEY);
  const isExpired = await isFetchExpired(
    podcastStorageData?.[podcastId]?.storeDate
  );
  if (!isExpired) return podcastStorageData[podcastId];
  return fetchPodcastDetail(podcastId, podcastStorageData, currentPodcast);
};

const mapDataTable = (
  podcastList: PodcastDetailData[]
): PodcastDetailTable[] => {
  if (podcastList?.length > 0) {
    delete podcastList[0];
    return podcastList.map((podcast) => ({
      title: podcast.trackName,
      releaseDate: format(new Date(podcast.releaseDate), "d/M/y"),
      duration: podcast.trackTimeMillis
        ? format(podcast.trackTimeMillis, "mm:ss")
        : "",
    }));
  } else {
    return [];
  }
};

export { getPodcastDetail, mapDataTable };
