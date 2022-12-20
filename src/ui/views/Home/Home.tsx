import React, { Fragment, useCallback, useEffect, useState } from "react";
import { Podcast } from "../../../domain/models/Podcast";
import { PodcastList } from "../../components/PodcastList";
import { usePodcast } from "../../context/Podcast.context";
import { getPodcast } from "./Home.controller";
import { useNavigate } from "react-router-dom";
import { Filter } from "../../components/Filter";
import { Wrapper, Counter } from "./Home.styles";

const Home = () => {
  const navigate = useNavigate();
  const [podcastList, setPodcastList] = useState([] as Podcast[]);
  const [filteredList, setFilteredList] = useState([] as Podcast[]);
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
    setFilteredList(podcastList);
  }, [podcastList]);

  useEffect(() => {
    fetchPodcast();
  }, [fetchPodcast]);

  const onSelectPodcast = (value: Podcast) => {
    setLoading(true);
    setCurrentPodcast(value);
    navigate(`podcast/${value.id.attributes["im:id"]}`);
  };

  const onFilterChange = (value: string) => {
    if (value) {
      const filtered = podcastList.filter(
        (podcast) =>
          podcast?.artist?.label
            ?.toLowerCase()
            .startsWith(value.toLowerCase()) ||
          podcast?.name?.label?.toLowerCase().startsWith(value.toLowerCase())
      );
      setFilteredList(filtered);
    } else {
      setFilteredList(podcastList);
    }
  };

  return (
    <Fragment>
      {!loading && (
        <Fragment>
          <Wrapper>
            <Counter> {filteredList.length}</Counter>
            <Filter onValueChange={(value) => onFilterChange(value)} />
          </Wrapper>
          <PodcastList
            podcastList={filteredList}
            onSelectPodcast={onSelectPodcast}
          />
        </Fragment>
      )}
    </Fragment>
  );
};
export default Home;
