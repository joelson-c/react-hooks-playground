import React from 'react';
import { Provider } from 'react-redux';
import 'normalize.css';

import { buildStore } from './store';
import DogImageForm from './components/DogImageForm';
import DogImagePreview from './components/DogImagePreview';
import { StyledContainer, StyledGridItem } from './components/Shared/StyledGrid';

function App() {
  return (
    <Provider store={buildStore()}>
      <StyledContainer flexDirection="row" as="main">
        <StyledGridItem as="section">
          <DogImageForm />
        </StyledGridItem>

        <StyledGridItem
          desktopFlexBasis="60%"
          minWidth="50vw"
          style={{ textAlign: 'center' }}
          as="section">
          <DogImagePreview />
        </StyledGridItem>
      </StyledContainer>
    </Provider>
  );
}

export default App;
