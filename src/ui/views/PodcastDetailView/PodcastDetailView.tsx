import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PodcastDetail } from "../../../domain/models/PodcastDetail";
import { getPodcastDetail } from "./PodcastDetailView.controller";

const PodcastDetailView = () => {
  const { podcastId } = useParams();
  const [podcast, setPodcast] = useState({} as PodcastDetail);

  const fetchPodcastDetail = useCallback(async () => {
    try {
      const data = await getPodcastDetail(podcastId as string);
      console.log(data);
      setPodcast(data);
    } catch (e) {
      setPodcast({} as PodcastDetail);
    }
  }, [podcastId]);

  useEffect(() => {
    if (podcastId) {
      fetchPodcastDetail();
    }
  }, [fetchPodcastDetail, podcastId]);

  return <div> PodcastDetail {podcast?.results?.[0].artistName}</div>;
};

export default PodcastDetailView;
