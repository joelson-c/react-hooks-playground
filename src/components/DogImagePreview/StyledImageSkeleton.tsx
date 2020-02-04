import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  to {
    background-position:
      100% 0,
      0 0;
  }
`;

export const StyledImageSkeleton = styled.div.attrs(() => ({
  'aria-hidden': true
}))`
  width: 50%;
  height: auto;
  padding-bottom: 40%;
  margin: auto;

  background-repeat: no-repeat;

  background-image:
      linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0,
        rgba(255, 255, 255, 0.5) 50%,
        rgba(255, 255, 255, 0) 100%),

        linear-gradient(lightgray 100%, transparent 0);

  background-size:
    70px 100%,
    auto;

  background-position: 0 0;

  animation: ${loading} 1s infinite;

  @media screen and (max-width: 1024px) {
    width: 80%;
    padding-bottom: 60%;
  }
`;
