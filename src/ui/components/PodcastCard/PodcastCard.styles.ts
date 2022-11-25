import styled from "styled-components";

interface ImageProps {
  src: string;
  srcSet: string;
}

const Cover = styled.img.attrs(({ src, srcSet }: ImageProps) => ({
  src: src,
  srsrcSetc: srcSet,
}))`
  width: 170px;
  border-radius: 5px;
  margin-bottom: 25px;
  align-self: center;
  cursor: pointer;
`;

const Container = styled.div`
  border-top: 1px solid var(--color-secondary-light);
  border-bottom: 1px solid var(--color-secondary-light);
  padding: 17px 8px;
  cursor: pointer;
`;

const Title = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin: 0px;
`;

const Text = styled.p`
  color: var(--color-secondary);
  font-size: 0.9rem;
  font-style: italic;
  margin: 0px;
  padding-top: 3px;
`;

const Subtitle = styled.p`
  color: var(--color-secondary);
  font-size: 0.9rem;
  font-weight: bold;
  margin: 0px;
  padding: 17px 0px 3px;
`;

const TextAlign = styled.div`
  text-align: start;
`;

export { Cover, Container, Subtitle, Text, Title, TextAlign };
