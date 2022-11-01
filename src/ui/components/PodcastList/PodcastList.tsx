import React from "react";
import { Podcast } from "../../../domain/models/Podcast";
import { PodcastItem } from "../PodcastItem";
import { Wrapper } from "./PodcastList.styles";

interface PodcastListProps {
  podcastList: Podcast[];
  onSelectPodcast: (item: Podcast) => void;
}

const PodcastList = ({ podcastList, onSelectPodcast }: PodcastListProps) => {
  return (
    <Wrapper data-testid="podcast-list">
      {podcastList &&
        podcastList.map((item) => {
          const { id, name, image, artist } = item;
          return (
            <PodcastItem
              key={id.label}
              name={name.label}
              image={image}
              author={artist.label}
              onClick={() => onSelectPodcast(item)}
            ></PodcastItem>
          );
        })}
    </Wrapper>
  );
};

export default PodcastList;
