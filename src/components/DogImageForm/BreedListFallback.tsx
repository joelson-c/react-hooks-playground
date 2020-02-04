import React from 'react';
import { StyledButton } from '../Shared/StyledButton';

type TBreedListFallbackProps = {
  onRetryAttempt: () => void
}

function BreedListFallback(props: TBreedListFallbackProps) {
  return (
    <>
      <p role="alert">The breed list could not be loaded.</p>
      <StyledButton type="button" onClick={props.onRetryAttempt}>Retry</StyledButton>
    </>
  );
}

export default BreedListFallback;
