import React, { useCallback, useEffect, useState } from "react";
import { PodcastApplication } from "../../../aplication";
import { Podcast } from "../../../domain/models/Podcast";
import { PodcastItem } from "../../components/PodcastItem";
import { Wrapper } from "./Home.styles";

const Home = () => {
  const [podcastList, setPodcastList] = useState([] as Podcast[]);
  const fetchPodcast = useCallback(async () => {
    try {
      const podcasts = await PodcastApplication.getPodcastList;
      setPodcastList(podcasts);
    } catch (e) {
      console.log(e);
      setPodcastList([]);
    }
  }, []);

  useEffect(() => {
    fetchPodcast();
  }, [fetchPodcast]);

  return (
    <Wrapper>
      {podcastList &&
        podcastList.map((item) => (
          <PodcastItem
            key={item.id.label}
            name={item.name.label}
            image={item.image}
            author={item.artist.label}
          ></PodcastItem>
        ))}
    </Wrapper>
  );
};

export default Home;
