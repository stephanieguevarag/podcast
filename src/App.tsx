import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./App.styles";
import Home from "./ui/views/Home/Home";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Fragment>
  );
};

export default App;
