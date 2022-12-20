import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { PodcastContext } from "../../context/Podcast.context";
import "@testing-library/jest-dom/extend-expect";
import EpisodesList from "./EpisodesList";

const mockResponse = {
  basicInfo: {
    artist: {
      label: "The Joe Budden Network",
      attributes: {
        href: "https://podcasts.apple.com/us/artist/the-joe-budden-network/1535844019?uo=2",
      },
    },
    contentType: {
      attributes: {
        term: "Podcast",
        label: "Podcast",
      },
    },
    image: [
      {
        label:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts125/v4/08/4c/5b/084c5b07-d5fd-e1aa-4762-d4369d7f1e4e/mza_1271598091786917531.jpeg/55x55bb.png",
        attributes: {
          height: "55",
        },
      },
      {
        label:
          "https://is3-ssl.mzstatic.com/image/thumb/Podcasts125/v4/08/4c/5b/084c5b07-d5fd-e1aa-4762-d4369d7f1e4e/mza_1271598091786917531.jpeg/60x60bb.png",
        attributes: {
          height: "60",
        },
      },
      {
        label:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts125/v4/08/4c/5b/084c5b07-d5fd-e1aa-4762-d4369d7f1e4e/mza_1271598091786917531.jpeg/170x170bb.png",
        attributes: {
          height: "170",
        },
      },
    ],
    name: {
      label: "The Joe Budden Podcast",
    },
    price: {
      label: "Get",
      attributes: {
        amount: "0",
        currency: "USD",
      },
    },
    releaseDate: {
      label: "2022-11-23T00:00:00-07:00",
      attributes: {
        label: "November 23, 2022",
      },
    },
    summary: {
      label:
        "Tune into Joe Budden and his friends. Follow along the crazy adventures of these very random friends.",
    },
    rights: {
      label: "© All rights reserved",
    },
    title: {
      label: "The Joe Budden Podcast - The Joe Budden Network",
    },
    link: {
      attributes: {
        rel: "alternate",
        type: "text/html",
        href: "https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=2",
      },
    },
    id: {
      label:
        "https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=2",
      attributes: {
        "im:id": "1535809341",
      },
    },
    category: {
      attributes: {
        "im:id": "1310",
        term: "Music",
        scheme:
          "https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2",
        label: "Music",
      },
    },
  },
  resultCount: 51,
  results: [
    {
      episodeUrl:
        "https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_534_15.mp3?dest-id=2422538",
      feedUrl: "https://jbpod.libsyn.com/applepodcast",
      closedCaptioning: "none",
      collectionId: 1535809341,
      collectionName: "The Joe Budden Podcast",
      previewUrl:
        "https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_534_15.mp3?dest-id=2422538",
      artworkUrl60:
        "https://is5-ssl.mzstatic.com/image/thumb/Podcasts125/v4/08/4c/5b/084c5b07-d5fd-e1aa-4762-d4369d7f1e4e/mza_1271598091786917531.jpeg/60x60bb.jpg",
      artistViewUrl:
        "https://itunes.apple.com/us/artist/the-joe-budden-network/1535844019?mt=2&uo=4",
      artworkUrl160:
        "https://is5-ssl.mzstatic.com/image/thumb/Podcasts125/v4/08/4c/5b/084c5b07-d5fd-e1aa-4762-d4369d7f1e4e/mza_1271598091786917531.jpeg/160x160bb.jpg",
      episodeContentType: "audio",
      contentAdvisoryRating: "Clean",
      trackViewUrl:
        "https://podcasts.apple.com/us/podcast/episode-534-leader-of-the-pack/id1535809341?i=1000561279958&uo=4",
      genres: [
        {
          name: "Music",
          id: "1310",
        },
      ],
      episodeGuid: "4c79a23b-0f7a-47db-b35f-8fcbb9f95854",
      description:
        "The guys dive right into Kendrick Lamar's new album (19:15) and other new music (1:01:10). Joe also begs the quesion of the value/worth of going viral (1:09:00), Young Thug and YSL updates (1:37:20), and the guys discuss the latest headlines in sports (1:59:05).\n  \n  \n Become a Patron of The Joe Budden Podcast for additional bonus episodes and visual content for all things J.B.P.: Tap in here www.patreon.com/JoeBudden\n  \n Sleeper Picks\n Joe | Nick Hakim - “I Don’t Know”\n Ice | Ray Vaughn - “Picking Cherries”\n Parks | Danger Mouse & Black Thought - “No Gold Teeth”\n Ish | Jeremy Raphael - “Paranoid”",
      releaseDate: "2022-05-14T06:30:00Z",
      trackId: 1000561279958,
      trackName: 'Episode 534 | "Leader Of The Pack"',
      shortDescription:
        "The guys dive right into Kendrick Lamar's new album (19:15) and other new music (1:01:10). Joe also begs the quesion of the value/worth of going viral (1:09:00), Young Thug and YSL updates (1:37:20), and the guys discuss the latest headlines in sports..",
      episodeFileExtension: "mp3",
      artistIds: [1535844019],
      kind: "podcast-episode",
      wrapperType: "podcastEpisode",
      country: "USA",
      collectionViewUrl:
        "https://itunes.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?mt=2&uo=4",
      trackTimeMillis: 9868000,
      artworkUrl600:
        "https://is5-ssl.mzstatic.com/image/thumb/Podcasts125/v4/08/4c/5b/084c5b07-d5fd-e1aa-4762-d4369d7f1e4e/mza_1271598091786917531.jpeg/600x600bb.jpg",
    },
    {
      episodeUrl:
        "https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_533_13.mp3?dest-id=2422538",
      feedUrl: "https://jbpod.libsyn.com/applepodcast",
      closedCaptioning: "none",
      collectionId: 1535809341,
      collectionName: "The Joe Budden Podcast",
      previewUrl:
        "https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_533_13.mp3?dest-id=2422538",
      artworkUrl60:
        "https://is5-ssl.mzstatic.com/image/thumb/Podcasts125/v4/08/4c/5b/084c5b07-d5fd-e1aa-4762-d4369d7f1e4e/mza_1271598091786917531.jpeg/60x60bb.jpg",
      artistViewUrl:
        "https://itunes.apple.com/us/artist/the-joe-budden-network/1535844019?mt=2&uo=4",
      artworkUrl160:
        "https://is5-ssl.mzstatic.com/image/thumb/Podcasts125/v4/08/4c/5b/084c5b07-d5fd-e1aa-4762-d4369d7f1e4e/mza_1271598091786917531.jpeg/160x160bb.jpg",
      episodeContentType: "audio",
      contentAdvisoryRating: "Clean",
      trackViewUrl:
        "https://podcasts.apple.com/us/podcast/episode-533-thats-culture/id1535809341?i=1000560436767&uo=4",
      genres: [
        {
          name: "Music",
          id: "1310",
        },
      ],
      episodeGuid: "a79306bd-8be2-4e36-9cf6-0882dee6cc73",
      description:
        "Kendrick Lamar is praised for his latest release, and the guys share their anticipation for his upcoming album (24:10). Joe also reacts to Jack Harlow's album (58:25), Young Thug and Gunna named in a R.I.C.O. case (1:17:40), and Joe mentions the latest documentary he's watched (1:46:20). Lastly, the guys chat with the fans during the \"Part of the Show\" segment (1:52:40), N.B.A. playoff recap (1:56:40), and MORE!\n  \n Become a Patron of The Joe Budden Podcast for additional bonus episodes and visual content for all things JBP: Tap in here www.patreon.com/JoeBudden\n  \n Sleeper Picks\n Joe | Kenyon Dixson - “Get High, Get By” (Ft. D Smoke)\n Ice | Kendrick Lamar - “The Heart Part 4”\n Parks | ScHoolboy Q - “Soccer Dad”\n Ish | Davion Farris - “Bad Guy”",
      releaseDate: "2022-05-11T06:30:00Z",
      trackId: 1000560436767,
      trackName: 'Episode 533 | "That\'s Culture?"',
      shortDescription:
        "Kendrick Lamar is praised for his latest release, and the guys share their anticipation for his upcoming album (24:10). Joe also reacts to Jack Harlow's album (58:25), Young Thug and Gunna named in a R.I.C.O. case (1:17:40), and Joe mentions the...",
      episodeFileExtension: "mp3",
      artistIds: [1535844019],
      kind: "podcast-episode",
      wrapperType: "podcastEpisode",
      country: "USA",
      collectionViewUrl:
        "https://itunes.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?mt=2&uo=4",
      trackTimeMillis: 9904000,
      artworkUrl600:
        "https://is5-ssl.mzstatic.com/image/thumb/Podcasts125/v4/08/4c/5b/084c5b07-d5fd-e1aa-4762-d4369d7f1e4e/mza_1271598091786917531.jpeg/600x600bb.jpg",
    },
    {
      episodeUrl:
        "https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_532_14.mp3?dest-id=2422538",
      feedUrl: "https://jbpod.libsyn.com/applepodcast",
      closedCaptioning: "none",
      collectionId: 1535809341,
      collectionName: "The Joe Budden Podcast",
      previewUrl:
        "https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_532_14.mp3?dest-id=2422538",
      artworkUrl60:
        "https://is5-ssl.mzstatic.com/image/thumb/Podcasts125/v4/08/4c/5b/084c5b07-d5fd-e1aa-4762-d4369d7f1e4e/mza_1271598091786917531.jpeg/60x60bb.jpg",
      artistViewUrl:
        "https://itunes.apple.com/us/artist/the-joe-budden-network/1535844019?mt=2&uo=4",
      artworkUrl160:
        "https://is5-ssl.mzstatic.com/image/thumb/Podcasts125/v4/08/4c/5b/084c5b07-d5fd-e1aa-4762-d4369d7f1e4e/mza_1271598091786917531.jpeg/160x160bb.jpg",
      episodeContentType: "audio",
      contentAdvisoryRating: "Clean",
      trackViewUrl:
        "https://podcasts.apple.com/us/podcast/episode-532-aint-nothing-average/id1535809341?i=1000559898295&uo=4",
      genres: [
        {
          name: "Music",
          id: "1310",
        },
      ],
      episodeGuid: "8016a05d-23e3-49fb-b4dc-ab2ee5be3a19",
      description:
        "The guys start by discussing Jack Harlow's highly anticipated album and much of the new music that was released (26:00). Joe also covers Dave Chappelle being attacked (1:12:15), Kevin Samuel's sudden passing (1:30:10), Drake gets petty on Instagram (2:13:10), and MORE!\n  \n Become a Patron of The Joe Budden Podcast for additional bonus episodes and visual content for all things JBP: Tap in here www.patreon.com/JoeBudden\n  \n Sleeper Picks\n  \n Joe | Normani - “Fair”\n Ice | 42 Dugg - “Free Me”\n Parks | Bad Bunny - “Me Porto Bonito”\n Ish | VanJess - “Slow Down” (Ft. Lucky Daye)",
      releaseDate: "2022-05-07T07:00:00Z",
      trackId: 1000559898295,
      trackName: 'Episode 532 | "Ain’t Nothing Average"',
      shortDescription:
        "The guys start by discussing Jack Harlow's highly anticipated album and much of the new music that was released (26:00). Joe also covers Dave Chappelle being attacked (1:12:15), Kevin Samuel's sudden passing (1:30:10), Drake gets petty on Instagram...",
      episodeFileExtension: "mp3",
      artistIds: [1535844019],
      kind: "podcast-episode",
      wrapperType: "podcastEpisode",
      country: "USA",
      collectionViewUrl:
        "https://itunes.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?mt=2&uo=4",
      trackTimeMillis: 11031000,
      artworkUrl600:
        "https://is5-ssl.mzstatic.com/image/thumb/Podcasts125/v4/08/4c/5b/084c5b07-d5fd-e1aa-4762-d4369d7f1e4e/mza_1271598091786917531.jpeg/600x600bb.jpg",
    },
  ],
  storeDate: "2022-11-28T19:52:33.673Z",
};
const providerValue = {
  loading: false,
  setLoading: jest.fn(),
  episodesList: mockResponse,
  setEpisodesList: jest.fn(),
  podcastInfoCard: mockResponse.basicInfo,
  setPodcastInfoCard: jest.fn(),
};

const renderComponent = () =>
  render(
    <BrowserRouter>
      <PodcastContext.Provider value={providerValue}>
        <EpisodesList />
      </PodcastContext.Provider>
    </BrowserRouter>
  );

describe("EpisodesList view", () => {
  test("Should show episodes count", async () => {
    renderComponent();
    const episodesList = screen.getByTestId("episodes-count");
    expect(episodesList).toBeInTheDocument();
  });

  test("Should show first episode row", async () => {
    renderComponent();
    const episodesList = screen.getByTestId("table-link-1");
    expect(episodesList).toBeInTheDocument();
  });
});
