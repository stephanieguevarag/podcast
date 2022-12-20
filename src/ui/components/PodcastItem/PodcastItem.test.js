import { screen, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PodcastItem from "./PodcastItem";

const mockResponse = {
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
  name: "The Joe Budden Podcast",
  author: "The Joe Budden Network",
  id: "podcast-item-0",
};

const onClick = jest.fn();

const renderComponent = () =>
  render(<PodcastItem {...mockResponse} onClick={onClick} />);

describe("PodcastList component", () => {
  test("Should show podcastList component", async () => {
    renderComponent();
    const podcastList = await screen.findByTestId(mockResponse.id);
    await waitFor(async () => {
      expect(podcastList).toBeInTheDocument();
    });
  });
});
