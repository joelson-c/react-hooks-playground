import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';

import { formReducer } from './DogForm/formSlice';
import { breedListReducer } from './DogForm/breedListSlice';
import { imageReducer as imageUrlReducer } from './DogImage/imageUrlSlice';
import HttpDogApi from '../api/HttpDogApi';
import IAppApi from '../api/IAppApi';
import { TRootState, TFormData } from './commonTypes';

export const combinedReducers = combineReducers({
  form: formReducer,
  breedList: breedListReducer,
  imageUrl: imageUrlReducer
});

function getLocalstoreState() {
  const stateStr = localStorage.getItem("formData");

  if (stateStr) {
    const stateObj = JSON.parse(stateStr) as TFormData & { date: string };

    return {
      form: stateObj
    };
  }
}

export function buildStore(
  apiImplementation: IAppApi = new HttpDogApi(),
  preloadedState: Partial<TRootState> | undefined = getLocalstoreState()) {
  const customDefaultMiddleware = getDefaultMiddleware({
    thunk: {
      extraArgument: apiImplementation
    }
  });

  return configureStore({
    reducer: combinedReducers,
    middleware: [...customDefaultMiddleware],
    preloadedState
  });
}