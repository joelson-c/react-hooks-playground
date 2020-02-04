import { combinedReducers, buildStore } from ".";

export enum RequestStatus {
  LOADING = "loading",
  ERROR = "error",
  SUCCESS = "success"
}

export type TFormData = {
  dogBreed: string,
  dogName: string,
  textStyle: string,
  textColor: string
}

export type TAppDispatch = ReturnType<typeof buildStore>['dispatch'];
export type TRootState = ReturnType<typeof combinedReducers>;
