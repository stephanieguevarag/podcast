import React, { useCallback, useEffect, useState } from "react";
import { PodcastApplication } from "../../../aplication";
import { Podcast } from "../../../domain/models/Podcast";
import { PodcastList } from "../../components/PodcastList";

const Home = () => {
  const [podcastList, setPodcastList] = useState([] as Podcast[]);

  const fetchPodcast = useCallback(async () => {
    try {
      const podcasts = await PodcastApplication.getPodcastList;
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
