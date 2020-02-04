import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TAppDispatch, RequestStatus } from '../commonTypes';
import IAppApi from '../../api/IAppApi';

type TImage = string;

type TDogImage = {
  status: RequestStatus,
  data: TImage
}

const imageSlice = createSlice({
  name: 'dogImageUrl',
  initialState: {} as TDogImage,
  reducers: {
    setUrlLoadingFlag(state) {
      return {
        ...state,
        status: RequestStatus.LOADING
      }
    },

    setUrlErrorFlag(state) {
      return {
        ...state,
        status: RequestStatus.ERROR
      }
    },

    updateImageUrl(state, action: PayloadAction<TImage>) {
      return {
        ...state,
        data: action.payload,
        status: RequestStatus.SUCCESS
      }
    }
  }
});

const { actions, reducer } = imageSlice;

export function fetchImageUrl(dogBreed: string) {
  return async (dispatch: TAppDispatch, _: any, dogApi: IAppApi) => {
    dispatch(actions.setUrlLoadingFlag());

    try {
      const imageUrl = await dogApi.fetchDogImageUrl(dogBreed);
      dispatch(actions.updateImageUrl(imageUrl));
    } catch (e) {
      dispatch(actions.setUrlErrorFlag());
    }
  }
}

export { reducer as imageReducer };
