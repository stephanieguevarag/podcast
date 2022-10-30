import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";

const renderComponent = () =>
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );

describe("Home view", () => {
  test("Should show home header", async () => {
    renderComponent();
    const headerText = screen.getByText("Podcaster");
    expect(headerText).toBeInTheDocument();
  });

  test("Should show podcastList component", async () => {
    renderComponent();
    const podcastList = screen.getByTestId("podcast-list");
    expect(podcastList).toBeInTheDocument();
  });
});
