import { Podcast } from "../models/Podcast";

export default interface PodcastRepository {
  getPodcastList(): Promise<Podcast[]>;
}
