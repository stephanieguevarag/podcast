import { PodcastApplication } from "../../../aplication";
import { PodcastDetail } from "../../../domain/models/PodcastDetail";
import {
  getStorageData,
  isFetchExpired,
  PodcastDetailStoreData,
  saveResponseInStorage,
} from "../../helpers";

const PODCAST_DETAIL_STORAGE_KEY = "detail_storage";

const saveResponseDetailInStorage = async (
  dataDetail: PodcastDetail,
  storeData: PodcastDetailStoreData,
  id: string
) => {
  const newData = {
    ...storeData,
    [id]: {
      data: dataDetail,
      storeDate: new Date().toISOString(),
    },
  };
  saveResponseInStorage({ ...newData }, PODCAST_DETAIL_STORAGE_KEY);
};

const fetchPodcastDetail = async (
  podcastId: string,
  storeData: PodcastDetailStoreData
): Promise<PodcastDetail> => {
  try {
    const response = await PodcastApplication.getPodcastDetail(podcastId);
    saveResponseDetailInStorage(response, storeData, podcastId);
    return response;
  } catch (e) {
    return {} as PodcastDetail;
  }
};

const getPodcastDetail = async (podcastId: string): Promise<PodcastDetail> => {
  const podcastStorageData = await getStorageData(PODCAST_DETAIL_STORAGE_KEY);
  const isExpired = await isFetchExpired(
    podcastStorageData?.[podcastId]?.storeDate
  );
  if (!isExpired) return podcastStorageData[podcastId];
  return fetchPodcastDetail(podcastId, podcastStorageData);
};

export { getPodcastDetail };
