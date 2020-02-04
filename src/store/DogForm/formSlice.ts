import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TAppDispatch, TFormData } from '../commonTypes';

const formSlice = createSlice({
  name: 'dogForm',
  initialState: {} as TFormData,
  reducers: {
    updateDogForm(state, action: PayloadAction<Partial<TFormData>>) {
      return {
        ...state,
        ...action.payload
      }
    }
  }
});

function serializeToLocalStorage(formData: TFormData) {
  const objToSerialize = {
    ...formData,
    date: Date()
  }

  const dataStr = JSON.stringify(objToSerialize);

  localStorage.setItem("formData", dataStr);
}

const { actions, reducer } = formSlice;

export function saveDogForm(formData: TFormData) {
  return (dispatch: TAppDispatch) => {
    serializeToLocalStorage(formData);

    dispatch(actions.updateDogForm(formData));
  }
}

export { reducer as formReducer };
