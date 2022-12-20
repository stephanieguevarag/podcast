import styled from "styled-components";

interface InputProps {
  placeholder: string;
  type: string;
  id: string;
}

const Input = styled.input.attrs(({ placeholder, type, id }: InputProps) => ({
  placeholder: placeholder,
  type: type,
  id: id,
}))`
  border: 1px solid var(--color-secondary-medium);
  border-radius: 5px;
  font-size: 1rem;
  padding: 0.6rem;
  width: 250px;
  color: var(--color-secondary);
  ::placeholder {
    color: var(--color-secondary-medium);
  }
  :focus {
    outline: none;
    border: 1px solid var(--color-secondary-dark);
    color: var(--color-secondary-dark);
  }
  @media only screen and (min-width: 768px) {
    width: 330px;
  }
`;
export { Input };
