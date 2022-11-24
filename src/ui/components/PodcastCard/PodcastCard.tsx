import React from "react";
import { Image } from "../../../domain/models/Podcast";

import {
  Box,
  Container,
  Cover,
  Subtitle,
  Text,
  Title,
  Wrapper,
} from "./PodcastCard.styles";

interface PodcastCardProps {
  image: Image[];
  name: string;
  author: string;
  description: string;
  onClick: () => void;
}

const PodcastCard = ({
  image,
  name,
  author,
  description,
  onClick,
}: PodcastCardProps) => {
  return (
    <Wrapper onClick={onClick}>
      <Cover
        src={image[0].label}
        srcSet={`${image[0].label} 256w, ${image[1].label} 512w, ${image[2].label} 1024w`}
        alt={name}
      />
      <Box>
        <Container>
          <Title>{name}</Title>
          <Text>by {author}</Text>
        </Container>
        <Subtitle>Description:</Subtitle>
        <Text>{description}</Text>
      </Box>
    </Wrapper>
  );
};

export default PodcastCard;
