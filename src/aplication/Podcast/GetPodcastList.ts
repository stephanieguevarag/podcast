import PodcastRepository from "../../domain/interfaces/PodcastRepository";

export const GetPodcastList = (repository: PodcastRepository) =>
  repository.getPodcastList();
