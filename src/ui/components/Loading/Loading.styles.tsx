import styled, { keyframes } from "styled-components";

const loadingAnimation = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

const Child = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--color-link);
  animation: ${loadingAnimation} 1.2s linear infinite;
`;

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  & ${Child}:nth-child(1) {
    top: 8px;
    left: 8px;
    animation-delay: 0s;
  }
  & ${Child}:nth-child(2) {
    top: 8px;
    left: 32px;
    animation-delay: -0.4s;
  }
  & ${Child}:nth-child(3) {
    top: 8px;
    left: 56px;
    animation-delay: -0.8s;
  }
  & ${Child}:nth-child(4) {
    top: 32px;
    left: 8px;
    animation-delay: -0.4s;
  }
  & ${Child}:nth-child(5) {
    top: 32px;
    left: 32px;
    animation-delay: -0.8s;
  }
  & ${Child}:nth-child(6) {
    top: 32px;
    left: 56px;
    animation-delay: -1.2s;
  }
  & ${Child}:nth-child(7) {
    top: 56px;
    left: 8px;
    animation-delay: -0.8s;
  }
  & ${Child}:nth-child(8) {
    top: 56px;
    left: 32px;
    animation-delay: -1.2s;
  }
  & ${Child}:nth-child(9) {
    top: 56px;
    left: 56px;
    animation-delay: -1.6s;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

export { Wrapper, Child, Container };
