import { ApiPodcastRepository } from "../infrastructure/repositories/ApiPodcastRepository";
import { GetPodcastDetail } from "./Podcast/GetPodcastDetail";
import { GetPodcastList } from "./Podcast/GetPodcastList";

export const PodcastApplication = {
  getPodcastList: GetPodcastList(ApiPodcastRepository),
  getPodcastDetail: GetPodcastDetail(ApiPodcastRepository),
};
