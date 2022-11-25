import styled from "styled-components";

interface AudioProps {
  src: string;
  controls: boolean;
}

const Title = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`;

const Container = styled.div`
  grid-row: span 1;
  grid-gap: 90px;
`;

const Text = styled.p`
  color: var(--color-secondary);
  font-size: 0.9rem;
  font-style: italic;
  margin: 0px;
  padding: 8px 0px 25px;
  border-bottom: 1px solid var(--color-secondary-light);
`;

const Audio = styled.audio.attrs(({ src, controls }: AudioProps) => ({
  src: src,
  controls: controls,
}))`
  margin-top: 25px;
  width: 100%;
`;
export { Audio, Container, Title, Text };
