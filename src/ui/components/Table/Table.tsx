import React from "react";
import { PodcastDetailTable } from "../../views/PodcastDetailView/PodcastDetailView.controller";
import { Text, Row, Wrapper } from "./Table.styles";

interface TableProps {
  titles: string[];
  content: PodcastDetailTable[];
  onClickLink?: () => void;
}
const Table = ({ titles, content, onClickLink }: TableProps) => {
  return (
    <Wrapper>
      <Row>
        {(titles || []).map((title, index) => (
          <Text isAlignCenter={index !== 0}>{title}</Text>
        ))}
      </Row>

      {(content || []).map((el, index) => (
        <Row rowColor={index % 2 !== 0}>
          <Text colorValue={"link"} onClick={onClickLink} isLink={true}>
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
