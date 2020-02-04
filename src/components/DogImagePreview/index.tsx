import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ImageResult from './ImageResult';
import { TRootState, RequestStatus } from '../../store/commonTypes';
import { fetchImageUrl } from '../../store/DogImage/imageUrlSlice';

function DogImagePreview() {
  const dispatch = useDispatch();
  const { dogBreed, dogName, textColor, textStyle } = useSelector((state: TRootState) => state.form);
  const { status, data: imageUrl } = useSelector((state: TRootState) => state.imageUrl);

  useEffect(() => {
    if (dogBreed) {
      dispatch(fetchImageUrl(dogBreed));
    }
  }, [dispatch, dogBreed]);

  return (
    <>
      <h2>Preview</h2>

      {status === RequestStatus.SUCCESS && (
        <ImageResult
          dogName={dogName}
          textColor={textColor}
          imageUrl={imageUrl}
          textStyle={textStyle} />)}
    </>
  );
}

export default DogImagePreview;
