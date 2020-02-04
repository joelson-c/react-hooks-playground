import React, { useState } from 'react';

import { StyledAlertWrapper } from './StyledAlertWrapper';
import { StyledCloseButton } from './StyledCloseButton';
import { StyledContainer } from '../Shared/StyledGrid';

type TAlertProps = {
  text: string,
  onAlertClose?: () => void
}

function Alert(props: TAlertProps) {
  const [isOpen, setIsOpen] = useState(true);

  const onCloseClick = () => {
    if (props.onAlertClose) {
      props.onAlertClose();
    }

    setIsOpen(false);
  }

  if (isOpen) {
    return (
      <StyledAlertWrapper role="alert">
        <StyledContainer flexDirection="row" disableWrap>
          <span title={props.text}>{props.text}</span>
          <StyledCloseButton
            type="button"
            onClick={onCloseClick}
            style={{ marginLeft: 'auto' }}
            aria-label="close">X</StyledCloseButton>
        </StyledContainer>
      </StyledAlertWrapper>
    );
  } else {
    return null;
  }
}

export default Alert;
