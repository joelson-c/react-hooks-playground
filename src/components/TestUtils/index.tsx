import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";

import { buildStore } from "../../store";
import { TRootState } from "../../store/commonTypes";
import FakeDogApi from "./FakeDogApi";
import IAppApi from "../../api/IAppApi";

function getFakeStore(storeData?: Partial<TRootState>, apiLayer: IAppApi = new FakeDogApi()) {
  return buildStore(apiLayer, storeData);
}

export function renderWithStore(component: React.ReactElement, storeData?: Partial<TRootState>, apiLayer?: IAppApi) {
  const fakeStore = getFakeStore(storeData, apiLayer);

  return render(
    <Provider store={fakeStore}>
      {component}
    </Provider>
  );
}