import React, { Fragment, useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Podcast } from "../../../domain/models/Podcast";
import { PodcastCard } from "../../components/PodcastCard";
import { usePodcast } from "../../context/Podcast.context";
import { getPodcastDetail } from "./PodcastDetailView.controller";
import { InfoBox, Wrapper } from "./PodcastDetailView.styles";

const PodcastDetailView = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const { podcastId } = useParams();
  const [podcastInfoCard, setPodcastInfoCard] = useState({} as Podcast);
  const { currentPodcast, setEpisodesList, setLoading, loading } = usePodcast();
  const fetchPodcastDetail = useCallback(async () => {
    try {
      const data = await getPodcastDetail(podcastId as string, currentPodcast);
      if (!data?.basicInfo) return navigate("/");
      setEpisodesList(data);
      setPodcastInfoCard(data.basicInfo);
      setLoading(false);
    } catch (e) {
      setLoading(true);
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPodcast, podcastId]);

  useEffect(() => {
    if (podcastId) {
      fetchPodcastDetail();
    }
  }, [fetchPodcastDetail, podcastId]);

  return (
    <Fragment>
      {!loading && (
        <Wrapper>
          <InfoBox data-testid="podcast-detail">
            {podcastInfoCard && Object.keys(podcastInfoCard).length > 0 && (
              <PodcastCard
                name={podcastInfoCard?.name?.label}
                image={podcastInfoCard?.image}
                author={podcastInfoCard?.artist?.label}
                description={podcastInfoCard?.summary?.label}
                onClick={() =>
                  navigate(`/podcast/${podcastInfoCard.id.attributes["im:id"]}`)
                }
                id="podcast-card"
              ></PodcastCard>
            )}
          </InfoBox>
          {children}
        </Wrapper>
      )}
    </Fragment>
  );
};

export default PodcastDetailView;
