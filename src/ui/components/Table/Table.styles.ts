import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div<{ rowColor?: boolean }>`
  display: grid;
  grid-template-columns: 1fr repeat(2, 6.5rem);
  grid-gap: 1rem;
  background-color: ${(props) =>
    props.rowColor && "var(--color-secondary-lighter)"};
  border-bottom: 1px solid var(--color-secondary-medium);
  padding: 8px;
`;

const Text = styled.div<{
  isAlignCenter?: boolean;
  colorValue?: string;
  isLink?: boolean;
  isBold?: boolean;
}>`
  cursor: ${(props) => props.isLink && "pointer"};
  text-align: ${(props) => props.isAlignCenter && "center"};
  color: ${(props) => `var(--color-${props.colorValue || "primary"})`};
  font-weight: ${(props) => props.isBold && "bold"};
  margin: 0;
  font-size: 0.9rem;
`;

export { Wrapper, Text, Row };
