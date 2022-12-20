import { screen, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PodcastList from "./PodcastList";

const mockResponse = [
  {
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
];

const podcastListProps = {
  podcastList: mockResponse,
  onSelectPodcast: jest.fn(),
};

const renderComponent = () => render(<PodcastList {...podcastListProps} />);

describe("PodcastList component", () => {
  test("Should show podcastList component", async () => {
    renderComponent();
    const podcastList = await screen.findByTestId("podcast-list");
    await waitFor(async () => {
      expect(podcastList).toBeInTheDocument();
    });
  });
});
