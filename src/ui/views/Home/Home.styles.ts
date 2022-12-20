import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5px 5px 5px;
  justify-content: end;
  align-items: center;
  margin: 1rem;
  @media only screen and (min-width: 768px) {
    padding: 5px 80px 5px;
  }
`;

const Counter = styled.p`
  font-size: 1.5rem;
  height: 28px;
  color: white;
  background-color: var(--color-link);
  border-radius: 5px;
  padding: 0px 5px;
  margin: 0 1rem 0 0;
`;

export { Wrapper, Counter };
