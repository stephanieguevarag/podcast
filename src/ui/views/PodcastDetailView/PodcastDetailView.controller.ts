import { PodcastApplication } from "../../../aplication";
import { PodcastDetailData } from "../../../domain/models/PodcastDetail";

const getPodcastDetail = async (
  podcastId: string
): Promise<PodcastDetailData[]> => {
  try {
    const response = await PodcastApplication.getPodcastDetail(podcastId);
    return response?.results || [];
  } catch (e) {
    return [];
  }
};

export { getPodcastDetail };
