import styled from "styled-components";

interface ImageProps {
  src: string;
  srcSet: string;
}

const Wrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  width: 290px;
  height: 200px;
  padding-top: 80px;
  margin: 70px 15px;
`;

const Cover = styled.img.attrs(({ src, srcSet }: ImageProps) => ({
  src: src,
  srsrcSetc: srcSet,
}))`
  position: absolute;
  width: 150px;
  border-radius: 100px;
  transform: translateY(-80px);
`;

const Container = styled.div`
  width: 100%;
  padding: 70px 10px 10px;
  text-align: center;
  box-shadow: 0px 2px 5px 3px rgba(235, 235, 235, 1);
`;

export { Wrapper, Cover, Container };
