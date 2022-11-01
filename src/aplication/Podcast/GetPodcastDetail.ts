import PodcastRepository from "../../domain/interfaces/PodcastRepository";

export const GetPodcastDetail =
  (repository: PodcastRepository) => (podcastId: string) => {
    return repository.getPodcastDetail(podcastId);
  };
