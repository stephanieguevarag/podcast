import { Podcast } from "../../domain/models/Podcast";
import { PodcastDetail } from "../../domain/models/PodcastDetail";
import { Storage } from "../../infrastructure/api/storage/storage";

export interface PodcastDetailStore extends PodcastDetail {
  basicInfo: Podcast;
  storeDate: string;
}
export interface PodcastDetailStoreData {
  [key: string]: PodcastDetailStore;
}

export const saveResponseInStorage = (
  data: { data: Podcast[] } | PodcastDetailStoreData,
  key: string
) =>
  Storage.set(
    key,
    JSON.stringify({
      ...data,
      date: new Date().toISOString(),
    })
  );
