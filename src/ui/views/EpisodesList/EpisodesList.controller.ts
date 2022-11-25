import { PodcastDetailData } from "../../../domain/models/PodcastDetail";
import { format } from "date-fns";

export interface PodcastDetailTable {
  title: string;
  duration: string;
  releaseDate: string;
  episodeUrl: string;
  description: string;
  id: number;
}

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
      episodeUrl: podcast.episodeUrl,
      description: podcast.description,
      id: podcast.trackId,
    }));
  } else {
    return [];
  }
};

export { mapDataTable };
