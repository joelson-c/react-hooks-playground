import React from 'react';
import { wait, fireEvent } from '@testing-library/react';

import DogImageForm from '.';
import { renderWithStore } from '../TestUtils';
import HttpDogApi from '../../api/HttpDogApi';

describe('DogImageForm', () => {
  test('should render all inputs', async () => {
    expect.assertions(4);

    const { getByLabelText } = renderWithStore(<DogImageForm />);
    await wait();

    expect(getByLabelText('Dog breed')).toBeInTheDocument();
    expect(getByLabelText('Dog name')).toBeInTheDocument();
    expect(getByLabelText('Text style')).toBeInTheDocument();
    expect(getByLabelText('Text color')).toBeInTheDocument();
  });


  test('should render a notification, when the user subsmits the form correctly', async () => {
    expect.assertions(1);

    const { getByLabelText, getByText, getByRole } = renderWithStore(<DogImageForm />);
    await wait();
    fireEvent.change(getByLabelText('Dog breed'), { target: { value: 'affenpinscher' } });
    fireEvent.change(getByLabelText('Dog name'), { target: { value: 'test name' } });
    fireEvent.change(getByLabelText('Text style'), { target: { value: 'test style' } });
    fireEvent.change(getByLabelText('Text color'), { target: { value: 'black' } });
    fireEvent.click(getByText('Save'));
    await wait();

    expect(getByRole('alert')).toBeVisible();
  });

  test('should render an error message, when the breed list could not be loaded', async () => {
    expect.assertions(1);

    class MockedHttpLayer extends HttpDogApi {};
    MockedHttpLayer.prototype.fetchBreedList = () => Promise.reject();

    const { getByRole } = renderWithStore(<DogImageForm />, undefined, new MockedHttpLayer());
    await wait();

    expect(getByRole('alert')).toBeInTheDocument();
  });

  test('should render a retry button if an error occurs and render the form if the data is available', async () => {
    expect.assertions(1);

    class MockedHttpLayer extends HttpDogApi {};
    MockedHttpLayer.prototype.fetchBreedList = jest
      .fn(() => Promise.resolve(['test'])) /* should run after the user clicks retries the request */
      .mockImplementationOnce(() => Promise.reject());

    const { getByRole, getByText } = renderWithStore(<DogImageForm />, undefined, new MockedHttpLayer());
    await wait();
    fireEvent.click(getByText('Retry'));
    await wait();

    expect(getByRole('form')).toBeInTheDocument();
  });

  describe('validationErrors', () => {
    test('should render a validation error, when the dog name field is empty', async () => {
      expect.assertions(1);

      const { getByLabelText, getByText } = renderWithStore(<DogImageForm />);
      await wait();
      fireEvent.change(getByLabelText('Dog name'), { target: { value: '' } });
      fireEvent.click(getByText('Save'));
      await wait();

      expect(getByText(/Dog name is required/i)).toBeInTheDocument();
    });

    test('should render a validation error, when the dog name has more than 50 characters', async () => {
      expect.assertions(1);

      const { getByLabelText, getByText } = renderWithStore(<DogImageForm />);
      await wait();
      fireEvent.change(getByLabelText('Dog name'), { target: { value: 'a'.repeat(52) } });
      fireEvent.click(getByText('Save'));
      await wait();

      expect(getByText(/Dog name should not have more than 50 characters/i)).toBeInTheDocument();
    });
  });
});