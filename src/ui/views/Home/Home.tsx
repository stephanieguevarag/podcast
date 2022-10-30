import React, { useCallback, useEffect, useState } from "react";
import { Podcast } from "../../../domain/models/Podcast";
import { PodcastList } from "../../components/PodcastList";
import { getPodcast } from "./Home.controller";

const Home = () => {
  const [podcastList, setPodcastList] = useState([] as Podcast[]);

  const fetchPodcast = useCallback(async () => {
    try {
      const podcasts = await getPodcast();
      setPodcastList(podcasts);
    } catch (e) {
      setPodcastList([]);
    }
  }, []);

  useEffect(() => {
    fetchPodcast();
  }, [fetchPodcast]);

  return <PodcastList podcastList={podcastList} />;
};

export default Home;
