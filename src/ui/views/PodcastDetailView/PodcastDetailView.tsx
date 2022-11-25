import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Podcast } from "../../../domain/models/Podcast";
import { PodcastDetail } from "../../../domain/models/PodcastDetail";
import { Box } from "../../components/Box";
import { PodcastCard } from "../../components/PodcastCard";
import { Table } from "../../components/Table";
import { usePodcast } from "../../context/Podcast.context";
import {
  getPodcastDetail,
  mapDataTable,
  PodcastDetailTable,
} from "./PodcastDetailView.controller";
import { Container, Count, InfoBox, Wrapper } from "./PodcastDetailView.styles";

const PodcastDetailView = () => {
  const { podcastId } = useParams();
  const [podcastEpisodes, setPodcastEpisodes] = useState({} as PodcastDetail);
  const [podcastInfoCard, setPodcastInfoCard] = useState({} as Podcast);
  const [dataTable, setDataTable] = useState([] as PodcastDetailTable[]);
  const { currentPodcast } = usePodcast();
  const titlesTable = ["Title", "Date", "Duration"];

  const fetchPodcastDetail = useCallback(async () => {
    try {
      const data = await getPodcastDetail(podcastId as string, currentPodcast);
      setPodcastEpisodes(data);
      setPodcastInfoCard(data?.basicInfo);
      setDataTable(mapDataTable([...data?.results]));
    } catch (e) {
      setPodcastEpisodes({} as PodcastDetail);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPodcast, podcastId]);

  useEffect(() => {
    if (podcastId) {
      fetchPodcastDetail();
    }
  }, [fetchPodcastDetail, podcastId]);

  return (
    <Wrapper>
      <InfoBox>
        {podcastInfoCard && Object.keys(podcastInfoCard).length > 0 && (
          <PodcastCard
            name={podcastInfoCard?.name?.label}
            image={podcastInfoCard?.image}
            author={podcastInfoCard?.artist?.label}
            description={podcastInfoCard?.summary?.label}
          ></PodcastCard>
        )}
      </InfoBox>
      <Container>
        <Box>
          <Count> Episodes: {podcastEpisodes?.resultCount}</Count>
        </Box>
      </Container>
      <Container>
        <Box>
          <Table titles={titlesTable} content={dataTable}></Table>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default PodcastDetailView;
