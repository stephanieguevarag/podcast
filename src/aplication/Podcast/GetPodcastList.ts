import PodcastRepository from "../../domain/interfaces/PodcastRepository";

export const GetPodcastList = (repository: PodcastRepository) => () => {
  return repository.getPodcastList();
};
