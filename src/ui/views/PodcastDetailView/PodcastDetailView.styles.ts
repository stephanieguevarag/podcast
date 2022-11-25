import styled from "styled-components";

const Wrapper = styled.div`
  padding: 5px;
  justify-content: start;
  padding: 40px 90px;
  display: grid;
  grid-template-columns: 270px 1fr;
  column-gap: 90px;
  row-gap: 60px;
  grid-template-rows: 50px 1fr;
`;

const InfoBox = styled.div`
  grid-row: span 2;
`;

export { InfoBox, Wrapper };
