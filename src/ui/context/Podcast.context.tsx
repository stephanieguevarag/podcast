import React, { useContext, useState, useMemo } from "react";
import PropTypes from "prop-types";
import { Podcast } from "../../domain/models/Podcast";

const podcastInitialValue = {
  currentPodcast: null as unknown as Podcast,
  setCurrentPodcast: () => null,
};

type PaymentsContextType = {
  currentPodcast: Podcast;
  setCurrentPodcast: React.Dispatch<React.SetStateAction<Podcast>>;
};

const PodcastContext =
  React.createContext<PaymentsContextType>(podcastInitialValue);

const PodcastContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentPodcast, setCurrentPodcast] = useState(
    null as unknown as Podcast
  );
  console.log(currentPodcast);
  const value = useMemo(
    () => ({ currentPodcast, setCurrentPodcast }),
    [currentPodcast]
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
