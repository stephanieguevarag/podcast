import React from "react";
import { PodcastDetailTable } from "../../views/EpisodesList/EpisodesList.controller";
import { Text, Row, Wrapper } from "./Table.styles";

interface TableProps {
  titles: string[];
  content: PodcastDetailTable[];
  onClickLink: (podcast: PodcastDetailTable) => void;
}
const Table = ({ titles, content, onClickLink }: TableProps) => {
  const onClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    podcast: PodcastDetailTable
  ) => {
    event.preventDefault();
    onClickLink(podcast);
  };
  return (
    <Wrapper>
      <Row>
        {(titles || []).map((title, index) => (
          <Text isAlignCenter={index !== 0} isBold={true} key={index}>
            {title}
          </Text>
        ))}
      </Row>

      {(content || []).map((el, index) => (
        <Row rowColor={index % 2 !== 0} key={index}>
          <Text
            colorValue={"link"}
            onClick={(e) => onClick(e, el)}
            isLink={true}
            data-testid={`table-link-${index}`}
          >
            {el.title}
          </Text>
          <Text isAlignCenter={true} colorValue={"secondary"}>
            {el.releaseDate}
          </Text>
          <Text isAlignCenter={true} colorValue={"secondary"}>
            {el.duration}
          </Text>
        </Row>
      ))}
    </Wrapper>
  );
};

export default Table;
