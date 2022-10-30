import styled from "styled-components";

interface LinkProps {
  href: string;
}

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 5px;
  border-bottom: 1px solid var(--color-secondary-light);
`;

const Link = styled.a.attrs(({ href }: LinkProps) => ({
  href: href,
}))`
  text-decoration: none;
  color: var(--color-link);
  padding-left: 65px;
  font-size: 24px;
`;

export { Navbar, Link };
