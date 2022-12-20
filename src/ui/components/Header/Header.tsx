import React from "react";
import { usePodcast } from "../../context/Podcast.context";
import { Loading } from "../Loading";
import { Navbar, Link } from "./Header.styles";

const Header = () => {
  const { loading } = usePodcast();
  return (
    <Navbar data-testid="header">
      <Link href="/"> Podcaster </Link>
      {loading && <Loading />}
    </Navbar>
  );
};

export default Header;
