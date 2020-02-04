import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual, batch } from 'react-redux';

import ImageForm from './ImageForm';
import Alert from '../Alert';
import BreedListFallback from './BreedListFallback';

import { saveDogForm } from '../../store/DogForm/formSlice';
import { TRootState, RequestStatus, TFormData } from '../../store/commonTypes';
import { fetchBreedList, clearErrorStatus } from '../../store/DogForm/breedListSlice';
import { StyledContainer, StyledGridItem } from '../Shared/StyledGrid';
import { LoadingIndicator } from '../Shared/LoadingIndicator';

function DogImageForm() {
  const dispatch = useDispatch();
  const [hasToShowAlert, shouldRenderAlert] = useState(false);

  const { breedList, formData } = useSelector((state: TRootState) => ({
    breedList: state.breedList,
    formData: state.form
  }), shallowEqual);

  const onFormSubmit = useCallback((data: TFormData) => {
    dispatch(saveDogForm(data));
    shouldRenderAlert(true);
  }, [dispatch]);

  const onFormAlertClose = useCallback(() => {
    shouldRenderAlert(false);
  }, []);

  const onBreedListRetryAttempt = useCallback(() => {
    batch(() => {
      dispatch(clearErrorStatus());
      dispatch(fetchBreedList());
    });
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchBreedList());
  }, [dispatch]);

  return (
    <StyledContainer>
      <StyledGridItem>
        <h1>Random dog image</h1>
        {breedList.status === RequestStatus.SUCCESS &&
          <ImageForm
            breedList={breedList.data}
            onFormSubmit={onFormSubmit}
            initialFormData={formData} />}

        {breedList.status === RequestStatus.LOADING
          && <LoadingIndicator actionText="Loading dog breed list..." />}

        {breedList.status === RequestStatus.ERROR && <BreedListFallback onRetryAttempt={onBreedListRetryAttempt} />}

        {hasToShowAlert && <Alert text="The form was sent successfully." onAlertClose={onFormAlertClose} />}
      </StyledGridItem>
    </StyledContainer>

  );
}

export default DogImageForm;
