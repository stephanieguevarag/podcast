import React, { useCallback, useEffect } from "react";
import { PodcastApplication } from "../../../aplication";

const Home = () => {
  const fetchPodcast = useCallback(async () => {
    try {
      const podcasts = await PodcastApplication.getPodcastList;
      console.log(podcasts);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    fetchPodcast();
  }, [fetchPodcast]);

  return <div>Podcast</div>;
};

export default Home;
