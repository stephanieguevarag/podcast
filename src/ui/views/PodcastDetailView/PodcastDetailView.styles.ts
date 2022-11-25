import styled from "styled-components";

const Wrapper = styled.div`
  padding: 5px;
  justify-content: start;
  padding: 80px 80px;
  display: grid;
  grid-template-columns: 270px 1fr;
  column-gap: 90px;
  row-gap: 60px;
  grid-template-rows: 50px 1fr;
`;

const Count = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`;

const Container = styled.div`
  grid-row: span 1;
  grid-gap: 90px;
`;

const InfoBox = styled.div`
  grid-row: span 2;
`;

export { Container, Count, InfoBox, Wrapper };
