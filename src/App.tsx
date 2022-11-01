import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./App.styles";
import Home from "./ui/views/Home/Home";
import "./styles.css";
import { PodcastDetailView } from "./ui/views/PodcastDetailView";
import { Header } from "./ui/components/Header";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="podcast/:podcastId" element={<PodcastDetailView />} />
      </Routes>
    </Fragment>
  );
};

export default App;
