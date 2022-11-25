import React, { useContext, useState, useMemo } from "react";
import PropTypes from "prop-types";
import { Podcast } from "../../domain/models/Podcast";
import { PodcastDetailStore } from "../helpers";
import { PodcastDetailTable } from "../views/EpisodesList/EpisodesList.controller";

const podcastInitialValue = {
  currentPodcast: null as unknown as Podcast,
  setCurrentPodcast: () => null,
  episodesList: null as unknown as PodcastDetailStore,
  setEpisodesList: () => null,
  currentEpisode: null as unknown as PodcastDetailTable,
  setCurrentEpisode: () => null,
};

type PodcastContextType = {
  currentPodcast: Podcast;
  setCurrentPodcast: React.Dispatch<React.SetStateAction<Podcast>>;
  episodesList: PodcastDetailStore;
  setEpisodesList: React.Dispatch<React.SetStateAction<PodcastDetailStore>>;
  currentEpisode: PodcastDetailTable;
  setCurrentEpisode: React.Dispatch<React.SetStateAction<PodcastDetailTable>>;
};

const PodcastContext =
  React.createContext<PodcastContextType>(podcastInitialValue);

const PodcastContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentPodcast, setCurrentPodcast] = useState(
    null as unknown as Podcast
  );
  const [episodesList, setEpisodesList] = useState(
    null as unknown as PodcastDetailStore
  );
  const [currentEpisode, setCurrentEpisode] = useState(
    null as unknown as PodcastDetailTable
  );

  const value = useMemo(
    () => ({
      currentPodcast,
      episodesList,
      currentEpisode,
      setCurrentEpisode,
      setCurrentPodcast,
      setEpisodesList,
    }),
    [currentEpisode, currentPodcast, episodesList]
  );

  return (
    <PodcastContext.Provider value={value}>{children}</PodcastContext.Provider>
  );
};

PodcastContextProvider.propTypes = {
  children: PropTypes.node,
};

const usePodcast = () => useContext(PodcastContext) || {};

export { usePodcast, PodcastContextProvider };
