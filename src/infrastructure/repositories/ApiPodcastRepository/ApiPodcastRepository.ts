import { ApiPodcast, Podcast } from "../../../domain/models/Podcast";
import { fetchApi } from "../../api/fetch/fetchApi";

const url = `https://api.allorigins.win/get?url=${encodeURIComponent(
  "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
)}`;

const ApiPodcastRepository = {
  getPodcastList: async () => {
    try {
      const response = await fetchApi.get(url);
      const content = JSON.parse(response?.contents);
      return mapPodcast(content?.feed?.entry);
    } catch (e) {
      throw e;
    }
  },
};

const mapPodcast = (podcastList: ApiPodcast[] = []): Podcast[] => {
  return podcastList.map(
    ({
      "im:artist": artist,
      "im:contentType": contentType,
      "im:image": image,
      "im:name": name,
      "im:price": price,
      "im:releaseDate": releaseDate,
      ...rest
    }: ApiPodcast): Podcast => ({
      artist,
      contentType,
      image,
      name,
      price,
      releaseDate,
      ...rest,
    })
  );
};

export default ApiPodcastRepository;
