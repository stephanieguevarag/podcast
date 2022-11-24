import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Podcast } from "../../../domain/models/Podcast";
import { PodcastDetail } from "../../../domain/models/PodcastDetail";
import { PodcastCard } from "../../components/PodcastCard";
import { usePodcast } from "../../context/Podcast.context";
import { getPodcastDetail } from "./PodcastDetailView.controller";
import { Wrapper } from "./PodcastDetailView.styles";

const PodcastDetailView = () => {
  const { podcastId } = useParams();
  const [podcastEpisodes, setPodcastEpisodes] = useState({} as PodcastDetail);
  const [podcastInfoCard, setPodcastInfoCard] = useState({} as Podcast);
  const { currentPodcast } = usePodcast();

  const fetchPodcastDetail = useCallback(async () => {
    try {
      const data = await getPodcastDetail(podcastId as string, currentPodcast);
      setPodcastEpisodes(data);
      setPodcastInfoCard(data?.basicInfo);
    } catch (e) {
      setPodcastEpisodes({} as PodcastDetail);
    }
  }, [currentPodcast, podcastId]);

  useEffect(() => {
    if (podcastId) {
      fetchPodcastDetail();
    }
  }, [fetchPodcastDetail, podcastId]);

  return (
    <Wrapper>
      {podcastInfoCard && Object.keys(podcastInfoCard).length > 0 && (
        <PodcastCard
          name={podcastInfoCard?.name?.label}
          image={podcastInfoCard?.image}
          author={podcastInfoCard?.artist?.label}
          description={podcastInfoCard?.summary?.label}
          onClick={() => {}}
        ></PodcastCard>
      )}
    </Wrapper>
  );
};

export default PodcastDetailView;
