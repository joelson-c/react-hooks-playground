import React, { useState, useEffect, useCallback } from 'react';
import webFontLoader from 'webfontloader';

import { StyledResultText } from './StyledResultText';
import { StyledResult, StyledResultWrapper } from './StyledResult';
import { StyledImageSkeleton } from './StyledImageSkeleton';
import { RequestStatus } from '../../store/commonTypes';

type TImageResultProps = {
  dogName: string,
  textColor: string,
  imageUrl: string
  textStyle?: string,
};

function ImageResult(props: TImageResultProps) {
  const [imageStatus, setImageStatus] = useState<RequestStatus>(RequestStatus.LOADING);
  const [fontStatus, setFontStatus] = useState<RequestStatus>(RequestStatus.LOADING);

  const onImageLoad = useCallback(() => {
    setImageStatus(RequestStatus.SUCCESS);
  }, []);

  const onImageError = () => {
    setImageStatus(RequestStatus.ERROR);
  };

  useEffect(() => {
    if (props.textStyle) {
      webFontLoader.load({
        classes: false,
        google: {
          families: [props.textStyle]
        },
        active() {
          setFontStatus(RequestStatus.SUCCESS);
        }
      });
    } else {
      setFontStatus(RequestStatus.SUCCESS);
    }
  }, [props.textStyle]);

  if (imageStatus === RequestStatus.ERROR) {
    return <p>The image could not be loaded.</p>
  }

  return (
    <>
      {imageStatus === RequestStatus.LOADING && <StyledImageSkeleton />}

      <StyledResultWrapper>
        <StyledResult
          alt="dog"
          src={props.imageUrl}
          onLoad={onImageLoad}
          onError={onImageError}
          style={{ display: imageStatus === RequestStatus.SUCCESS ? 'block' : 'none' }} />

        <StyledResultText
          color={props.textColor}
          fontFamily={props.textStyle}
          style={{
            display: fontStatus === RequestStatus.SUCCESS &&
              imageStatus === RequestStatus.SUCCESS ? 'block' : 'none'
          }}>
          {props.dogName}
        </StyledResultText>
      </StyledResultWrapper>
    </>
  );
}

export default ImageResult;