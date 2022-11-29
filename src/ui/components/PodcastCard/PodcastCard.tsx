import React from "react";
import { Image } from "../../../domain/models/Podcast";
import { Box } from "../Box";

import {
  Container,
  Cover,
  TextAlign,
  Subtitle,
  Text,
  Title,
} from "./PodcastCard.styles";

interface PodcastCardProps {
  image: Image[];
  name: string;
  author: string;
  description: string;
  onClick: () => void;
  id?: string;
}

const PodcastCard = ({
  image,
  name,
  author,
  description,
  onClick,
  id,
}: PodcastCardProps) => {
  return (
    <Box>
      <Cover
        src={image[0].label}
        srcSet={`${image[0].label} 256w, ${image[1].label} 512w, ${image[2].label} 1024w`}
        alt={name}
        onClick={onClick}
        data-testid={id}
      />
      <TextAlign>
        <Container onClick={onClick}>
          <Title>{name}</Title>
          <Text>by {author}</Text>
        </Container>
        <Subtitle>Description:</Subtitle>
        <Text>{description}</Text>
      </TextAlign>
    </Box>
  );
};

export default PodcastCard;
