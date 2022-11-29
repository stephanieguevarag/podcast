import React from "react";
import { Box } from "../../components/Box";
import { usePodcast } from "../../context/Podcast.context";
import { htmlParser } from "../../helpers";
import { Audio, Container, Title, Text } from "./Episode.styles";

const Episode = () => {
  const { currentEpisode } = usePodcast();

  return (
    <Container>
      {currentEpisode && (
        <Box id="current-episode">
          <Title> {currentEpisode.title}</Title>
          <Text> {htmlParser(currentEpisode.description)}</Text>
          <Audio src={currentEpisode.episodeUrl} controls></Audio>
        </Box>
      )}
    </Container>
  );
};

export default Episode;
