import React, { Fragment, useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Podcast } from "../../../domain/models/Podcast";
import { Loading } from "../../components/Loading";
import { PodcastCard } from "../../components/PodcastCard";
import { usePodcast } from "../../context/Podcast.context";
import { getPodcastDetail } from "./PodcastDetailView.controller";
import { InfoBox, Wrapper } from "./PodcastDetailView.styles";

const PodcastDetailView = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const { podcastId } = useParams();
  const [podcastInfoCard, setPodcastInfoCard] = useState({} as Podcast);
  const { currentPodcast, setEpisodesList } = usePodcast();
  const [loading, setLoading] = useState(true);
  const fetchPodcastDetail = useCallback(async () => {
    try {
      const data = await getPodcastDetail(podcastId as string, currentPodcast);
      if (!data?.basicInfo) return navigate("/");
      setEpisodesList(data);
      setPodcastInfoCard(data.basicInfo);
      setLoading(false);
    } catch (e) {
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
      {loading ? (
        <Loading />
      ) : (
        <Wrapper>
          <InfoBox>
            {podcastInfoCard && Object.keys(podcastInfoCard).length > 0 && (
              <PodcastCard
                name={podcastInfoCard?.name?.label}
                image={podcastInfoCard?.image}
                author={podcastInfoCard?.artist?.label}
                description={podcastInfoCard?.summary?.label}
                onClick={() =>
                  navigate(`/podcast/${podcastInfoCard.id.attributes["im:id"]}`)
                }
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
