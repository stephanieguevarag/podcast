import { ApiPodcastRepository } from "../infrastructure/repositories/ApiPodcastRepository";
import { GetPodcastList } from "./Podcast/GetPodcastList";

export const PodcastApplication = {
  getPodcastList: GetPodcastList(ApiPodcastRepository),
};
