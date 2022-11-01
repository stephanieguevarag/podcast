import { Podcast } from "../models/Podcast";
import { PodcastDetail } from "../models/PodcastDetail";

export default interface PodcastRepository {
  getPodcastList(): Promise<Podcast[]>;
  getPodcastDetail(podcastId: string): Promise<PodcastDetail>;
}
