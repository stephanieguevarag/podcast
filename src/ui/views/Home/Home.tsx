import React, { Fragment, useCallback, useEffect, useState } from "react";
import { Podcast } from "../../../domain/models/Podcast";
import { Header } from "../../components/Header";
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

  return (
    <Fragment>
      <Header></Header>
      <PodcastList podcastList={podcastList} />
    </Fragment>
  );
};

export default Home;
