import React, { Fragment, useCallback, useEffect, useState } from "react";
import { Podcast } from "../../../domain/models/Podcast";
import { PodcastList } from "../../components/PodcastList";
import { usePodcast } from "../../context/Podcast.context";
import { getPodcast } from "./Home.controller";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [podcastList, setPodcastList] = useState([] as Podcast[]);
  const { setCurrentPodcast, setLoading, loading } = usePodcast();

  const fetchPodcast = useCallback(async () => {
    try {
      const podcasts = await getPodcast();
      setPodcastList(podcasts);
      setLoading(false);
    } catch (e) {
      setPodcastList([]);
    }
  }, [setLoading]);

  useEffect(() => {
    fetchPodcast();
  }, [fetchPodcast]);

  const onSelectPodcast = (value: Podcast) => {
    setLoading(true);
    setCurrentPodcast(value);
    navigate(`podcast/${value.id.attributes["im:id"]}`);
  };

  return (
    <Fragment>
      {!loading && (
        <PodcastList
          podcastList={podcastList}
          onSelectPodcast={onSelectPodcast}
        />
      )}
    </Fragment>
  );
};
export default Home;
