import React from 'react';
import styled, { keyframes } from 'styled-components';

import { StyledGridItem, StyledContainer } from '../StyledGrid';
import spinnerSvg from './spinner.svg';

const loadingAnimation = keyframes`
  to {
    visibility: visible;
  }
`;

const LoadingContainer = styled.div`
  visibility: hidden;
  text-align: center;

  animation: ${loadingAnimation} 0.2s linear 0.3s forwards;
`;

const IndicatorText = styled.p`
  display: inline-block;

  font-size: 1.3em;
  font-weight: 300;
`;

const IndicatorIcon = styled.object`
  width: 70px;
  height: 70px;

  vertical-align: middle;
  margin: 0 15px;

  pointer-events: none;
`;

export const LoadingIndicator = ({ actionText }) => (
  <StyledContainer>
    <StyledGridItem>
      <LoadingContainer>
        <IndicatorIcon data={spinnerSvg} aria-labelledby="actionText" />
        <IndicatorText inputKey="actionText">{actionText}</IndicatorText>
      </LoadingContainer>
    </StyledGridItem>
  </StyledContainer>
);
