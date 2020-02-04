import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TAppDispatch, RequestStatus } from '../commonTypes';
import IAppApi from '../../api/IAppApi';

type TBreedListData = Array<string>;

type TBreedList = {
  status: RequestStatus,
  data: TBreedListData
}

const breedListSlice = createSlice({
  name: 'breedList',
  initialState: {} as TBreedList,
  reducers: {
    setListLoadingFlag(state) {
      return {
        ...state,
        status: RequestStatus.LOADING
      }
    },

    setListErrorFlag(state) {
      return {
        ...state,
        status: RequestStatus.ERROR
      }
    },

    updateBreedList(state, action: PayloadAction<TBreedListData>) {
      return {
        ...state,
        data: action.payload,
        status: RequestStatus.SUCCESS
      }
    },

    clearErrorStatus(state) {
      return {
        ...state,
        status: RequestStatus.LOADING
      }
    }
  }
});

const { actions, reducer } = breedListSlice;

export const { clearErrorStatus } = actions;

export function fetchBreedList() {
  return async (dispatch: TAppDispatch, _: any, dogApi: IAppApi) => {
    dispatch(actions.setListLoadingFlag());

    try {
      const breedList = await dogApi.fetchBreedList();
      dispatch(actions.updateBreedList(breedList));
    } catch (e) {
      dispatch(actions.setListErrorFlag());
    }
  }
}

export { reducer as breedListReducer };
