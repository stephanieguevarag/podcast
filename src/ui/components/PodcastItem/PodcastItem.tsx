import React from "react";
import { Image } from "../../../domain/models/Podcast";

import { Container, Cover, Text, Title, Wrapper } from "./PodcastItem.styles";

interface PodcastItemProps {
  image: Image[];
  name: string;
  author: string;
  onClick: () => void;
}

const PodcastItem = ({ image, name, author, onClick }: PodcastItemProps) => {
  return (
    <Wrapper onClick={onClick}>
      <Cover
        src={image[0].label}
        srcSet={`${image[0].label} 256w, ${image[1].label} 512w, ${image[2].label} 1024w`}
        alt={name}
      />
      <Container>
        <Title>{name}</Title>
        <Text>Author: {author}</Text>
      </Container>
    </Wrapper>
  );
};

export default PodcastItem;
