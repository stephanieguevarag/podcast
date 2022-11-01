import React, { useCallback, useEffect, useState } from "react";
import { Podcast } from "../../../domain/models/Podcast";
import { PodcastList } from "../../components/PodcastList";
import { getPodcast } from "./Home.controller";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
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

  const onSelectPodcast = (value: Podcast) => {
    navigate(`podcast/${value.id.attributes["im:id"]}`);
  };

  return (
    <PodcastList podcastList={podcastList} onSelectPodcast={onSelectPodcast} />
  );
};

export default Home;
