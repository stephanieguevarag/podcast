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
  loading: true,
  setLoading: () => null,
};

type PodcastContextType = {
  currentPodcast: Podcast;
  setCurrentPodcast: React.Dispatch<React.SetStateAction<Podcast>>;
  episodesList: PodcastDetailStore;
  setEpisodesList: React.Dispatch<React.SetStateAction<PodcastDetailStore>>;
  currentEpisode: PodcastDetailTable;
  setCurrentEpisode: React.Dispatch<React.SetStateAction<PodcastDetailTable>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
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
  const [loading, setLoading] = useState(true);

  const value = useMemo(
    () => ({
      currentPodcast,
      episodesList,
      currentEpisode,
      loading,
      setLoading,
      setCurrentEpisode,
      setCurrentPodcast,
      setEpisodesList,
    }),
    [currentEpisode, currentPodcast, episodesList, loading]
  );

  return (
    <PodcastContext.Provider value={value}>{children}</PodcastContext.Provider>
  );
};

PodcastContextProvider.propTypes = {
  children: PropTypes.node,
};

const usePodcast = () => useContext(PodcastContext) || {};

export { usePodcast, PodcastContextProvider, PodcastContext };
