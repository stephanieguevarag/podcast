import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "../../components/Box";
import { Table } from "../../components/Table";
import { usePodcast } from "../../context/Podcast.context";
import { mapDataTable, PodcastDetailTable } from "./EpisodesList.controller";
import { Container, Title } from "./EpisodesList.styles";

const EpisodesList = () => {
  const navigate = useNavigate();
  const [dataTable, setDataTable] = useState([] as PodcastDetailTable[]);

  const { episodesList, setCurrentEpisode } = usePodcast();
  const titlesTable = ["Title", "Date", "Duration"];

  useEffect(() => {
    if (episodesList?.results) {
      setDataTable(mapDataTable(episodesList?.results));
    }
  }, [episodesList, setCurrentEpisode]);

  return (
    <Fragment>
      <Container>
        <Box>
          <Title data-testid="episodes-count">
            Episodes: {episodesList?.resultCount}
          </Title>
        </Box>
      </Container>
      {dataTable && (
        <Container data-testid="episode-list">
          <Box>
            <Table
              titles={titlesTable}
              content={dataTable}
              onClickLink={(podcast: PodcastDetailTable) => {
                navigate(`episode/${podcast.id}`);
                setCurrentEpisode(podcast);
              }}
            ></Table>
          </Box>
        </Container>
      )}
    </Fragment>
  );
};

export default EpisodesList;
