import React from "react";
import { Image } from "../../../domain/models/Podcast";

import { Container, Cover, Wrapper } from "./PodcastItem.styles";

type PodcastItemProps = {
  image: Image[];
  name: string;
  author: string;
};

const PodcastItem = ({
  image,
  name,
  author,
}: PodcastItemProps): JSX.Element => {
  return (
    <Wrapper>
      <Cover
        src={image[0].label}
        srcSet={`${image[0].label} 1x, ${image[1].label} 2x, ${image[2].label} 3x`}
        alt={name}
      />
      <Container>
        <p>{name}</p>
        <p>{author}</p>
      </Container>
    </Wrapper>
  );
};

export default PodcastItem;
