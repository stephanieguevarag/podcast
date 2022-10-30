import React from "react";
import { Podcast } from "../../../domain/models/Podcast";
import { PodcastItem } from "../PodcastItem";
import { Wrapper } from "./PodcastList.styles";

interface PodcastListProps {
  podcastList: Podcast[];
}

const PodcastList = ({ podcastList }: PodcastListProps) => {
  return (
    <Wrapper>
      {podcastList &&
        podcastList.map((item) => {
          const { id, name, image, artist } = item;
          return (
            <PodcastItem
              key={id.label}
              name={name.label}
              image={image}
              author={artist.label}
            ></PodcastItem>
          );
        })}
    </Wrapper>
  );
};

export default PodcastList;
