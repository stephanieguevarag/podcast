import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PodcastDetailData } from "../../../domain/models/PodcastDetail";
import { getPodcastDetail } from "./PodcastDetailView.controller";

const PodcastDetailView = () => {
  const { podcastId } = useParams();
  const [podcast, setPodcast] = useState([] as PodcastDetailData[]);

  const fetchPodcastDetail = useCallback(async () => {
    try {
      const data = await getPodcastDetail(podcastId as string);
      setPodcast(data);
    } catch (e) {
      setPodcast([]);
    }
  }, [podcastId]);

  useEffect(() => {
    if (podcastId) {
      fetchPodcastDetail();
    }
  }, [fetchPodcastDetail, podcastId]);

  return <div> PodcastDetail </div>;
};

export default PodcastDetailView;
