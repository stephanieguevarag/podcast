import { screen, render, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { PodcastContext } from "../../context/Podcast.context";
import "@testing-library/jest-dom/extend-expect";
import { mocked } from "jest-mock";
import { getPodcast } from "./Home.controller.ts";
import Home from "./Home";

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

const providerValue = {
  loading: false,
  setLoading: jest.fn(),
};

jest.mock("./Home.controller.ts");

const mockedGetPodcast = mocked(getPodcast, true);

const renderComponent = () =>
  render(
    <BrowserRouter>
      <PodcastContext.Provider value={providerValue}>
        <Home />
      </PodcastContext.Provider>
    </BrowserRouter>
  );

describe("Home view", () => {
  beforeEach(() => {
    mockedGetPodcast.mockReturnValue(Promise.resolve(mockResponse));
  });

  test("Should show podcastList component", async () => {
    renderComponent();
    const podcastList = await screen.findByTestId("podcast-list");
    await waitFor(async () => {
      expect(podcastList).toBeInTheDocument();
    });
  });

  test("Should show first podcast item", async () => {
    renderComponent();
    const podcastList = await screen.findByTestId("podcast-item-0");
    await waitFor(() => {
      expect(podcastList).toBeInTheDocument();
    });
  });
});
